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
    transition: { delay: 1.5, duration: 1.5 },
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
        <h2>Welcome to Pizzalator</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          deserunt ipsum illum ut quasi officiis nesciunt exercitationem sequi
          cumque dolore saepe, libero recusandae totam aspernatur vitae modi
          dolores eius earum.
        </p>
        <Link to="/base">
          <motion.button variants={buttonVariants} whileHover="hover">
            Create Your Pizza
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
