import React from 'react'
import css from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
    <div className={`innerWidth ${css.container}`}>

        {/* upper elements */}

        <div className={`${css.upperElements}`}>
            <span>
                Hey There, <br /> I'm Sachin.
            </span>
            <span>
                I'm front-end developer <br />
                I love what I do..
            </span>
        </div>

        {/*lower elements */}
        <div className={`${css.lowerElements}`}>
            <div className={`${css.exprence}`}>

            </div>
            <div className={`${css.certificate}`}>
                
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hero