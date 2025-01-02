 
import Image from "next/image";
import CloudImage from '../../../public/Logo.jpg';
import {TiTick} from "react-icons/ti";
import  Styles  from './hero.module.css';
const Hero = () => {
  return (
 <div className={Styles.hero}>
    <div className={Styles.heroLeft}>
        <h1 className={Styles.title}>Portal Web</h1>
        <p className={Styles.desc}>
          The best web for your online success  
        </p>
<div className={Styles.services}>
<div className={Styles.servicesItem}>
         <TiTick />   Easy To Use Control Panel
        </div>
        <div className={Styles.servicesItem}>
         <TiTick />   Secure Hosting
        </div>
        <div className={Styles.servicesItem}>
         <TiTick />   Website maintenance
        </div>
</div>
    </div>  
    <div>
      <Image src={CloudImage} alt='cloud' width={500} height={500}/>
    </div>
 </div>
  )
}

export default Hero