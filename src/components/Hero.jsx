import { motion } from "framer-motion";
import { styles } from "../styles";
import image from "../constants/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[120vh] mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="z-20 sm:mt-24 lg:mt-0">
          <h1 className={`${styles.heroHeadText} text-white`}>
            hi, i'm <br />
            <span className="text-[#9c6eff] font-ultrasonic lg:text-[250px] sm:text-[200px] text-[110px]">Mariam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a graphic designer and a Web Developer,
            <br className="sm:block hidden" /> specializing in branding,
            illustrations, user interfaces and web applications
          </p>
        </div>
        <div className="absolute sm:flex rotate-12 hidden h-44 w-72 rounded-lg lg:left-[500px] sm:left-[400px] sm:top-[50px] z-10">
          <img
            src={image.maryam}
            alt="maryam"
            className="h-72 w-72 rounded-lg  object-cover"
          />
        </div>
      </div>

      <div className="absolute lg:bottom-40 sm:bottom-72 bottom-64  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
