import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 ,ease: "easeInOut"},
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="hero">
        <h2>The Pizzalator</h2>
        <p>
          Love Pizza like us? <br/>Well, you'll love it even more when you make it your
          own. 
       <br/>
          Here you have the ingredients and receipes you need :) 
        </p>
        <Link to="/base">
          <motion.button variants={buttonVariants} whileHover="hover">
            Lets Pizza!
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
