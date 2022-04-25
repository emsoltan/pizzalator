import React from "react";
import Base from "./Base";
const Recipe = (pizza) => {
  const types = [
    {
      name: "American",
      description:
        "also known as sfincione , focaccia,  thick-crust, deep-dish or pan pizza. <br/>The Sicilian pizza is a very versatile pizza that goes by lots of different names, depending on the region, city, or country where it’s made. <br/>Though the name and the toppings may vary a lot, the basics stay the same.<br/>These pizzas have a thicker, softer, and more bread-like texture than the Neapolitan, Roman or New York pizza. <br/>They’re baked in a pan or baking tray that’s coated heavily with olive oil. <br/>As the oil heats up in the oven, it will fry the base of the pizza, making it super crispy and delicious.",
      ration:
        "<li>Tipo 00 or bread flour: 100%</li> <li>Salt: 2%</li><li>Yeast: 1.5 %</li><li>Olive oil: 1.5%</li>Water: 55% – 85%<li></li>",
      instructions:
        "{<li>Proofing at room temperature (min 6 – max 24 hours) or cold fermenting (min 8 – max 72 hours)</li><li>Oven temperature:  250 – 280°C /480 – 540 ℉.</li> <li>Baking time: 15 – 20 mins.</li>",
    },
    {
      name: "Neapoeltian",
      description: [
        "also known as sfincione , focaccia,  thick-crust, deep-dish or pan pizza. <br/>The Sicilian pizza is a very versatile pizza that goes by lots of different names, depending on the region, city, or country where it’s made.",
        "Though the name and the toppings may vary a lot, the basics stay the same.<br/>These pizzas have a thicker, softer, and more bread-like texture than the Neapolitan, Roman or New York pizza. <br/>They’re baked in a pan or baking tray that’s coated heavily with olive oil. <br/>As the oil heats up in the oven, it will fry the base of the pizza, making it super crispy and delicious.",
      ],

      ration:
        "<li>Tipo 00 or bread flour: 100%</li> <li>Salt: 2%</li><li>Yeast: 1.5 %</li><li>Olive oil: 1.5%</li>Water: 55% – 85%<li></li>",
      instructions:
        "{<li>Proofing at room temperature (min 6 – max 24 hours) or cold fermenting (min 8 – max 72 hours)</li><li>Oven temperature:  250 – 280°C /480 – 540 ℉.</li> <li>Baking time: 15 – 20 mins.</li>",
    },
  ];
  return (
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
  );
};

export default Recipe;
