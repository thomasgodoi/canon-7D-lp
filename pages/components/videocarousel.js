import { React, useEffect } from 'react';
import style from '../../styles/VideoCarousel.module.css';

export default function VideoCarousel(props) {

    useEffect(() => {
        handlePlaybackRate(props.slowMotion);
    }, [props.slowMotion])

    const handlePlaybackRate = state => {
        const vid = document.getElementById('videoplayer');
        if(state === true) {
            vid.playbackRate = 1;
        } else {
            vid.playbackRate = 16;
        }
    }

    return (
         <div className={style['background']}>
                <video id="videoplayer" width="720" controls={false} height="480" autoPlay muted loop style={{position:'relative', top:'-500px', left:'0', zIndex: '-1'}} >
                    <source  src="/videos/video.mp4" type="video/mp4"/>
                </video>
         </div>
    )
}