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
                <Image src={EOS7D} alt="EOS 7D" width={546} height={101} />

                <div style={{textAlign:'justify', marginTop:'60px'}}>
                  <a style={{background: 'red', color:'white', fontWeight:'bold', fontSize:'24px', padding: '0 17px', padding:'0 15px'}}>
                    CANON&apos;S BIGGEST PROJECT TO DATE 
                  </a>
                  <span style={{width:'600px', color:'white', fontWeight:'lighter', fontSize:'13px'}}>
                    <br/>
                    The EOS 7D is an excellent addition to Canon&apos;s range of APS-C DSLRs that is, in terms of build quality, speed of operation, ergonomics and image quality, 
                    a cut above Canon&apos;s previous APS-C flagship. Its eight frames per second continuous shooting speed and highly flexible AF system, coupled 
                    with an 18Mp CMOS sensor with formidable high ISO capabilities make the Canon EOS 7D one of the finest APS-C DSLRs in the market.
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
                  Weather Sealing is protection of the internal parts of a camera from external influences such as moisture, dust, and humidity. The EOS 7D showed excellence in
                  performance in all kinds of weather tests, making it a reliable camera to bring everywhere.
                  </span>
              </div>
              <div style={{marginTop:'50px', color:'white', width:'590px', textAlign:'justify'}}>
                <a style={{fontWeight:'bold', fontSize:'23px', color:'white'}}>SUPER SLOW MOTION FEATURE</a>
                <br/>
                <span style={{fontSize:'13px', fontWeight: 'lighter'}}>
                  It is now possible to record up to 1000 frames per second in all resolutions, bringing a new range of ideas to your creativity.
                </span>
              </div>
            </div>

            <a href="#features" className={styles['find-out-more']}> 
              <br/> <span style={{cursor:'pointer'}} >FIND OUT MORE &nbsp;</span> <br/><br/>
              <Image src={FindOutMoreIcon} alt="Find out more" width={20} height={20} className={styles['find-out-more-icon']}/> <br/>
            </a>

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
