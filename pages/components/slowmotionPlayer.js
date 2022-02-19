import { React, useState } from 'react';
import Image from 'next/image';

import style from '../../styles/Slowmotionplayer.module.css';
import VideoCarousel from './videocarousel';
import ViewFinder from '../content/images/VIEWFINDER.png'

export default function SlowmotionPlayer() {
    const [isSlowMotionOn, setIsSlowMotionOn] = useState(false);

    const handleSlowMotion = state => {
        setIsSlowMotionOn(state);
    }

    return (
         <div className={style['background']}>
            <Image src={ViewFinder} width="720" height ="480" alt=""/>
            <VideoCarousel slowMotion={isSlowMotionOn} />
            <button onMouseOver={() => handleSlowMotion(true)} onMouseLeave={() =>handleSlowMotion(false)}>
                <a>Hover to activate Ultra Slow Motion</a>
            </button>
         </div>
    )
} 