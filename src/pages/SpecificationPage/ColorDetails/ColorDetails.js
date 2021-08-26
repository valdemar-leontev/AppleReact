import React from "react";
import ScrollAnimatedBlock from "../../../components/ScrollAnimatedBlock/ScrollAnimatedBlock";
import styles from "./ColorDetails.module.css";

const colors = [
  {
    id: 1,
    title: "Silver",
    background: "linear-gradient(#f5f4f0 50%, #d2d3d4 50%)",
  },

  {
    id: 2,
    title: "Space grey",
    background: "linear-gradient(#3c3d3a 50%, #595759 50%)",
  },

  {
    id: 3,
    title: "Blue sky",
    background: "linear-gradient(#2f506c 50%, #91a6bb 50%)",
  },

  {
    id: 4,
    title: "Pink",
    background: "linear-gradient(#e4544d 50%, #d8a097 50%)",
  },

  {
    id: 5,
    title: "Green",
    background: "linear-gradient(#e7ece3 50%, #afbfab 50%)",
  },
];

const ColorDetails = ({ onChangeHandler }) => {
  return (
    <ScrollAnimatedBlock>
      <div data-animated className={styles.colorDetails}>
        {colors.map((color) => {
          return (
            <div
              style={{ background: color.background }}
              onClick={() => {
                onChangeHandler(color.id);
              }}
            ></div>
          );
        })}
      </div>
    </ScrollAnimatedBlock>
  );
};

export default ColorDetails;
