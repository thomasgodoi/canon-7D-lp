import Head from "next/head";
import Image from "next/image";
import GithubLogo from './content/icons/github-icon.png';

import Camera from './content/images/canon-7d.png';
import CanonLogo from './content/images/canon-logo.jpg';
import EOS7D from './content/images/EOS-7D-horizontal-white.png';
import FindOutMoreIcon from './content/icons/find-out-more.svg';

import styles from "../styles/Home.module.css";
import Features from "./components/features";
import SlowmotionPlayer from "./components/slowmotionPlayer";

export default function Home() {
  return (
    <div className={styles['background']}>
      <Head>
        <title>Introducing: Canon EOS 7D | GitHub: thomasgodoi</title>
        <meta name="description" content="Created by Thomas Godoi" />
        <link rel="shortcut icon" href="/canon-c.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles['navbar']}>
          <ul>
            <li><a onClick={() => console.log('Ah, I see you\'re a man of culture as well.' )}>OFFICIAL STORE</a><hr/></li>
            <li><a onClick={() => console.log('How do you do, fellow programmer?' )}>GET INSPIRED</a><hr/></li>
            <li><a onClick={() => console.log('Please focus on aesthetics, you won\'t find anything here ò.ó' )}>DRIVERS {'&'} MANUALS</a><hr/></li>
            <li><a onClick={() => console.log('/watch?v=ub82Xb1C8os')}>SUPPORT</a><hr/></li>
          </ul>
        </div>

        <div style={{ marginTop:'65px', background: 'red', width:'1550px', height:'1700px', borderRadius:'60px', opacity:'.8', 
          background:'linear-gradient(to bottom, #000000, #282828)', boxShadow:'4px 4px 20px rgba(0, 0, 0, .5)', color:'white'}}> 
          <div style={{margin:'0 150px'}}>

            <div style={{display:'flex', justifyContent:'space-between', marginTop:'80px'}}>
              <div style={{width:'600px', display:'block', textAlign:'center'}}>
                <a style={{fontSize:'77px', color:'white', fontWeight:'lighter', lineHeight: '100px'}}> INTRODUCING</a>
                <br/>
                <Image src={EOS7D} alt="EOS 7D" width={546} height={101}/>

                <div style={{textAlign:'justify', marginTop:'60px'}}>
                  <a style={{background: 'red', color:'white', fontWeight:'bold', fontSize:'24px', padding: '0 17px', padding:'0 15px'}}>
                    CANON&apos;S BIGGEST PROJECT TO DATE 
                  </a>
                  <span style={{width:'600px', color:'white', fontWeight:'lighter', fontSize:'13px'}}>
                    <br/>
                    Pokem ipsum dolor sit amet fishing rod Excadrill Deino Pokedex Pokemon Heroes Officer Jenny. 
                    Sapphire Brock Basculin Leavanny Water Turtwig they&apos;re comfy and easy to wear. Ut aliquip ex ea commodo consequat Slash Golett Mr.
                    Mime Durant Leech Seed Water Gun. V for victory Rotom Suicune Ice Weepinbell Shaymin Gible. Pokemon Heroes Hidden Machine to denounce the evils 
                    of truth and love Fire Dark Eelektrik Shinx.
                  </span>
                </div>
              </div>

              <div style={{width:'600px'}}>
                <Image src={Camera} alt="Canon 7d" width={590} height={397}/>
              </div>

            </div>
            <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
              <div style={{marginTop:'50px', color:'white', width:'600px', textAlign:'justify'}}>
                  <a style={{fontWeight:'bold', fontSize:'23px', color:'white'}}>THE BEST ENVIRONMENT SEALING IN THE MARKET</a>
                  <br/>
                  <span style={{fontSize:'13px', fontWeight: 'lighter'}}>
                  Pokem ipsum dolor sit amet fishing rod Excadrill Deino Pokedex Pokemon Heroes Officer Jenny. Sapphire Brock Basculin Leavanny Water Turtwig they&apos;re
                  comfy and easy to wear. Ut aliquip ex ea commodo consequat Slash Golett Mr. Mime Durant Leech Seed Water Gun. V for victory Rotom Suicune Ice Weepinbel Shinx.
                  </span>
              </div>
              <div style={{marginTop:'50px', color:'white', width:'590px', textAlign:'justify'}}>
                <a style={{fontWeight:'bold', fontSize:'23px', color:'white'}}>SUPER SLOW MOTION FEATURE</a>
                <br/>
                <span style={{fontSize:'13px', fontWeight: 'lighter'}}>
                  Ut aliquip ex ea commodo consequat Slash Golett Mr. Mime Durant Leech Seed Water Gun. V for victory Rotom Suicune Ice Weepinbell Shaymin Gible.
                </span>
              </div>
            </div>

            <button style={{display:'block', textAlign:'center', margin:'auto', background:'transparent', border:'none', marginTop:'30px'}}> 
              <br/> <a style={{cursor:'pointer'}} href="#features">FIND OUT MORE</a> <br/><br/>
              <Image src={FindOutMoreIcon} alt="Find out more" width={20} height={20} className={styles['find-out-more-icon']}/> <br/>
            </button>

            <div style={{width: '750px', margin:'auto', marginTop:'100px'}} id="features">
              <Features />
            </div>
          
            <div style={{width: '750px', margin:'auto'}} id="slowmotion-player">
              <SlowmotionPlayer />
            </div>

            <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
              <Image src={CanonLogo} alt="Canon" width={60} height={20} id="logo-canon"/>
            </div>
          </div>

        </div>
      </main>

    <footer className={styles['credits']}>
      <a href="https://github.com/thomasgodoi" target="_blank" rel="noopener noreferrer">
        My GitHub{" "}
        <span className={styles.logo}>
          <Image src={GithubLogo} alt="Github Logo" width={30} height={30} />
        </span>
      </a>
    </footer>







      
      <style jsx global> 
            {`
                html,
                body {
                  font-family: 'Cairo', sans-serif;
                }
            `}
        </style>
    </div>
  );
}
