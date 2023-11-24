import React, { useState } from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'


const Header = () => {

  const [menuOpen , setMenuOpen] = useState(false)
  const headerShadow = useHeaderShadow()
  return (
    <motion.div 
    initial = "hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once:true , amount:0.25}}
    className={`paddings ${css.wrapper}`}
    style={{boxShadow : headerShadow}}
    >
        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={css.name}>
                Sachin
            </div>
            <ul 
            style={getMenuStyles(menuOpen)}
            className={`flexCenter ${css.menu}`}>
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
            <div className={css.menuIcons}
                onClick={()=> setMenuOpen((prev) => !prev)}
            >
                <BiMenuAltRight size={30}/>
            </div>
        </div>
    </motion.div>
  )
}

export default Header