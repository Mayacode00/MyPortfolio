import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { sectionWrapper } from "../hoc";

const ServiceCard = (props) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * props.index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={props.icon}
            alt={props.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {props.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>introduction</p>
        <h1 className={`${styles.sectionHeadText}`}>overview.</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]"
      >
        I'm a multi-talented human with over 3+ years of experiences in wide
        range of design disciplines.You can also call me a Graphic Designer, Frontend web
        developer, experience illustrator, interaction, UI, UX or by any other
        market defined function-title. I am also a stylist, music enthusiast,
        animation lover and lover of good photography. I don’t like to define
        myself by the work I’ve done. I define myself by the work I want to do.
        Skills can be taught, personality is inherent. I prefer to keep
        learning, continue challenging myself, and do interesting things that
        matter. Fueled by high energy levels and boundless enthusiasm, I’m
        easily inspired and more then willing to follow my fascinations wherever
        they take me. I’m passionate, expressive, multi-talented spirit with a
        natural ability to entertain and inspire. I’m never satisfied to just
        come up with ideas. Instead I have an almost impulsive need to act on
        them. My abundant energy fuels me in the pursuit of many interests,
        hobbies, areas of study and artistic endeavors. I’m a fast learner, able
        to pick up new skills and juggle different projects and roles with
        relative ease. I like to develop expertise in a number of areas over the
        course of my life and career.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(About, "about");
