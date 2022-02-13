import { React, useEffect, useState } from 'react';
import Image from 'next/image';

import style from '../../styles/Features.module.css';

import IconSpecs from '../content/icons/specs.svg';
import IconWaterProof from '../content/icons/waterproof.svg';
import IconSlowMo from '../content/icons/slowmo.svg';
import IconNightPhoto from '../content/icons/night-photo.svg';
import IconHD from '../content/icons/HD.svg';
import IconEyeLevel from '../content/icons/eye.svg';

export default function Features() {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        setIcon('specs')
    }, [])

    const handleTextView = icon => {
        setIcon(icon)
    }


    return (
        <div className={style['background']} >
            <div className={style['texts']}>
                {icon === 'specs' &&
                    <div>
                        <a>CAMERA SPECIFICATIONS</a> <br/>
                        <span>
                            You can read all the documentation and manual in <button style={{border:'none', background:'transparent', color:'white', cursor:'pointer'}} onClick={() => window.location.href="https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/eos-dslr-and-mirrorless-cameras/dslr/eos-7d"}> this link.</button>
                        </span>
                    </div>
                }
                {icon === 'waterproof' &&
                    <div>
                        <a>WATERPROOFNESS? OLD BUSINESS</a><br/>
                        <span>
                            Our cameras are not waterproof anymore. Instead, we are producing weather sealed products, lowering the risks of losing your camera at any weather.
                        </span>
                    </div>
                }
                {icon === 'slowmotion' &&
                    <div>
                        <a>SUPER SLOW MOTION</a><br/>
                        <span>
                            The EOS 7D can noew record up to 1000 frames per second, enabling much easier editing and higher image quality.
                        </span>
                    </div>
                }
                {icon === 'nightlevel' &&
                    <div>
                        <a>AMAZING NIGHT-PHOTO CAPTURE</a><br/>
                        <span>
                        With a broad range of ISO settings, the EOS 7D enables shooting from dawn through dusk and ensures capture of the finest detail. With enhanced, low-noise high-sensitivity optimization, shooting in situations previously possible only with flash becomes as simple as point and shoot.    
                        </span>
                    </div>
                }
                {icon === 'hd' &&
                    <div>
                        <a>HIGHEST QUALITY</a><br/>
                        <span>
                            The new 7D features a Canon-designed 18.0 Megapixel APS-C size CMOS sensor that captures such a high level of resolution. Dual DIGIC 4 Image Processors ensure that images are captured, processed and saved with remarkable speed. 
                        </span>
                    </div>
                }
                {icon === 'eyelevel' &&
                    <div>
                        <a>BREATHTAKING EYE-LEVEL VIEW</a><br/>
                        <span>
                        The EOS 7D features a phenomenal, redesigned viewfinder that not only offers 100 percent coverage, 1x magnification, a 29.4° angle of view and user-controlled dioptric adjustment, it also features a transparent LCD display which enables a number of viewfinder displays to be overlaid at the touch of a button.                         </span>
                    </div>
                }
            </div>
            <ul style={{display:'flex', justifyContent:'space-between', alignItems:'center', border:'1px solid red'}}>
                <li><Image width={25} height={25} src={IconSpecs} alt="Specs" onMouseOver={() => handleTextView('specs')} /></li>
                <li><Image width={25} height={25} src={IconWaterProof} alt="Waterproof" onMouseOver={() => handleTextView('waterproof')} /></li>
                <li><Image width={25} height={25} src={IconSlowMo} alt="Slow Motion" onMouseOver={() => handleTextView('slowmotion')} /></li>
                <li><Image width={25} height={25} src={IconNightPhoto} alt="Night Photo" onMouseOver={() => handleTextView('nightlevel')} /></li>
                <li><Image width={25} height={25} src={IconHD} alt="HD" onMouseOver={() => handleTextView('hd')} /></li>
                <li><Image width={25} height={25} src={IconEyeLevel} alt="Eye level" onMouseOver={() => handleTextView('eyelevel')} /></li>
            </ul>

            
        </div>
    )
}