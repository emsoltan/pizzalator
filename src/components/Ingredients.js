import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

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

const Ingredients = ({ addTopping, pizza }) => {
  const types = [
    {
      name: "Sicilian",
      description:
        "also known as sfincione , focaccia,  thick-crust, deep-dish or pan pizza....",
      ration: "",
      instructions: "",
    },
    {
      name: "American",
      description:
        "also known as sfincione , focaccia,  thick-crust, deep-dish or pan pizza..",
      ration: "",
      instructions: "",
    },
    {
      name: "Neapoeltian",
      description:
        "also known as sfincione , focaccia,  thick-crust, deep-dish or pan pizza..",

      ration:
        "",
      instructions:
        "",
    },
  ];

  return (
    <div className="ingredients container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="ingredients-content"
      >
        <h3>Ingredeints</h3>
        <select
          name="count"
          id="count"
          onClick={(e) => addTopping(e.target.value)}
        >
          <option value="How many?">Persons</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>

        <div className="recipe">
          <ul>
            {types.map((i, id) => (
              <li key={id}>Type2 : {i.name}</li>
            ))}
            {types.map((i, id) => (
              <li key={id}>Description: {i.description}</li>
            ))}
            <li>
              Type: {`${types[0].name}`}{" "}
              {pizza.base && pizza.base === types[0].name}
            </li>
            <li>Description: </li>
            <li>Instruction: </li>
          </ul>
        </div>
        <Link to="/base">
          <motion.button variants={buttonVariants} whileHover="hover">
            Check Recipe
          </motion.button>
        </Link>
        <Link to="/">
          <motion.button variants={buttonVariants} whileHover="hover">
            Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Ingredients;
