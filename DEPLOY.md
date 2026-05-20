# Deploy — allandev.es

Documentación completa para reproducir el entorno de producción desde cero.

---

## Arquitectura

```
git push origin main
        │
        ├── GitHub Actions
        │       ├── Build React (client/build/)
        │       ├── rsync → IONOS /home/www/public/   (frontend estático)
        │       └── curl deploy hook → Render          (trigger backend)
        │
        └── Render (auto-deploy)
                └── node server/index.js               (Express + Resend)
```

| Capa | Servicio | URL |
|------|----------|-----|
| Frontend | IONOS Hosting Web | allandev.es |
| Backend | Render (free) | react-nodejs-portfolio.onrender.com |
| Email | Resend (free) | resend.com |

---

## Cuentas y servicios necesarios

- **GitHub** — repositorio del proyecto
- **IONOS** — hosting web con acceso SSH
- **Render** — servidor Node.js (plan gratuito)
- **Resend** — envío de emails (plan gratuito, 3000 emails/mes)

---

## Archivos del proyecto relevantes

### `.github/workflows/deploy.yml`
Workflow de GitHub Actions. Se dispara en cada push a `main`:
1. Instala dependencias del cliente
2. Hace el build de React con `REACT_APP_API_URL` inyectada
3. Sube `client/build/` a IONOS vía rsync/SSH
4. Llama al deploy hook de Render para actualizar el backend

### `client/.env.production`
```
REACT_APP_API_URL=https://react-nodejs-portfolio.onrender.com
```
> Este archivo está en `.gitignore`. No se sube al repo. El valor se pasa
> como secreto de GitHub Actions en el build (secreto `REACT_APP_API_URL`).

### `server/.env`
```
RESEND_API_KEY=re_xxxxxxxxxxxx
PORT=3001
```
> Este archivo está en `.gitignore`. En producción las variables se configuran
> directamente en el panel de Render.

---

## Secretos de GitHub

Configurar en: **GitHub → repo → Settings → Secrets and variables → Actions**

| Secreto | Descripción | Dónde obtenerlo |
|---------|-------------|-----------------|
| `SSH_PRIVATE_KEY` | Clave privada SSH para el deploy | `cat ~/.ssh/github_actions_deploy` |
| `SSH_HOST` | Host SSH de IONOS | Panel IONOS → Acceso SSH/FTP |
| `SSH_PORT` | Puerto SSH de IONOS | Panel IONOS → Acceso SSH/FTP |
| `SSH_USER` | Usuario SSH de IONOS | Panel IONOS → Acceso SSH/FTP (ej: `su76212`) |
| `SSH_PATH` | Ruta web en el servidor | `/home/www/public/` |
| `REACT_APP_API_URL` | URL del backend en Render | `https://react-nodejs-portfolio.onrender.com` |
| `RENDER_DEPLOY_HOOK` | URL para disparar deploy en Render | Render → Settings → Deploy Hook |

---

## Variables de entorno en Render

Configurar en: **Render → servicio → Environment**

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API key de Resend |

---

## Configuración de Render

- **Repositorio:** `github.com/Alllxn/React-Nodejs-Portfolio`
- **Branch:** `main`
- **Build Command:** `cd server && npm ci`
- **Start Command:** `node server/index.js`
- **Auto-Deploy:** activado (triggereado por el deploy hook desde GitHub Actions)

---

## Configuración de Resend

El dominio `allandev.es` debe estar verificado en Resend con estos registros DNS en IONOS:

| Tipo | Nombre | Valor |
|------|--------|-------|
| `TXT` | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQ...` |
| `MX` | `send` | `feedback-smtp.eu-west-1.amazonses.com` (prioridad 10) |
| `TXT` | `send` | `v=spf1 include:amazonses.com ~all` |

---

## Setup desde cero

### 1 — Clave SSH para GitHub Actions

Ejecutar en local (WSL):
```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_actions_deploy -N ""
```

Añadir la clave pública al servidor IONOS (via Putty o SSH):
```bash
mkdir -p ~/.ssh
echo "CONTENIDO_DE_github_actions_deploy.pub" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys
```

Añadir el contenido de `~/.ssh/github_actions_deploy` (privada) al secreto `SSH_PRIVATE_KEY` en GitHub.

### 2 — Render

1. Crear un nuevo **Web Service** en Render conectado al repo
2. Configurar build/start commands y variables de entorno (ver arriba)
3. Copiar el **Deploy Hook** URL → añadir como secreto `RENDER_DEPLOY_HOOK` en GitHub

### 3 — Resend

1. Crear cuenta en resend.com
2. Añadir y verificar el dominio `allandev.es` (añadir registros DNS en IONOS)
3. Crear una API Key → añadir como variable `RESEND_API_KEY` en Render

### 4 — Primer deploy

```bash
git checkout main
git commit --allow-empty -m "trigger initial deploy"
git push origin main
```

Seguir el progreso en **GitHub → Actions**.
