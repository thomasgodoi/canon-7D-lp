import { React } from 'react';

import style from '../../styles/Slowmotionplayer.module.css';
import VideoCarousel from './videocarousel';

export default function SlowmotionPlayer() {

    return (
         <div className={style['background']}>
             <VideoCarousel />
         </div>
    )
}