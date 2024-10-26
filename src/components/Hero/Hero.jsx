import React from 'react'
import styles from './Hero.module.css'
import { FaGithub , FaFacebook} from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt';

function Hero() {
    return (
        <div className={styles.hero_wrapper}>
            <div className={styles.container}>
                <div className={styles.hero_con}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}>My name is</p>
                        <h3 className={styles.text_2}>Ekkawat Meekae</h3>
                        <p className={styles.text_3}>
                        <span style={{ marginInline: '10px'}}>I’m a </span>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Front-end Developer',
                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Web Developer',
                                    2000,
                                ]}
                                speed={20}
                                repeat={Infinity}
                                />
                        </p>
                        <ul className={styles.hero_social}>
                            <li><a href="https://github.com/bookwses"><FaGithub /></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100049280231605"></a><FaFacebook /></li>
                        </ul>
                    </div>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <div className={styles.hero_img}></div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}  

export default Hero
