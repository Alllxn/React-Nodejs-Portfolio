import React from 'react';
import './Timeline.css';
import grupo_mbc from '../../assets/timeline/grupo_mbc.jpg';
import self_taught from '../../assets/timeline/self-taught.jpg';
import learning from '../../assets/timeline/learning.jpg';
import ieselrincon from '../../assets/timeline/ieselrincon.png';
import ayesa from '../../assets/timeline/ayesa.jpg';
import { useLanguage } from '../../context/LanguageContext';

const images = [self_taught, learning, grupo_mbc, ayesa, ieselrincon];
const alts = ['self_taught', 'learning', 'grupo_mbc', 'ieselrincon', 'ayesa'];

export default function Timeline(){
    const { t } = useLanguage();

    return (
        <section id='timeline-container' className='component'>
            <h2 className='magic-background-underline load-animation-element'>{t.timeline.title}</h2>
            <article id="timeline-wrap" className='load-animation-element'>
                <ul>
                    {t.timeline.items.map((item, i) => (
                        <li key={i} className="timeline-element load-animation-element">
                            <div className="timeline-element-image">
                                <img src={images[i]} alt={alts[i]}/>
                            </div>
                            <div className="timeline-element-description">
                                <span>{item.date}</span>
                                <h3 className="magic-underline">{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    )
}
