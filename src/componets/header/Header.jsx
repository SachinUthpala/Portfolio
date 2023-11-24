import React from 'react'
import css from './Header.module.scss'
import {BiPhoneCall} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { headerVariants } from '../../utils/motion'

const Header = () => {
  return (
    <motion.div 
    initial = "hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once:true , amount:0.25}}
    className={`paddings ${css.wrapper}`}>
        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={css.name}>
                Sachin
            </div>
            <ul className={`flexCenter ${css.menu}`}>
                <li><a href="">Services</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Testimonials</a></li>
                <li className={`flexCenter ${css.phone}`}>
                    <p>
                        0762712200
                    </p>
                    <BiPhoneCall size={"40px"}/>
                </li>
            </ul>
        </div>
    </motion.div>
  )
}

export default Header