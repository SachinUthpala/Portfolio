import React from "react";
import css from "./Certificates.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";

const Certificates = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="certficates"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Certificates</span>
            <p style={{ marginTop: "10px" }}>For better understand</p>
          </div>
          <span className="secondaryText">
            <a href="https://www.sololearn.com/en/profile/29869121" target="">
              Find More
            </a>
          </span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./HTML.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./kotlin.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./PythonForBiginers.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.11, 0.6)}
            src="./webDevelopment.png"
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;
