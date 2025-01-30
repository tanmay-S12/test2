import React from "react";
import styles from "./HorizontalCard.module.css";


const HorizontalCard = ({ heading, subheading }) => {
    console.log(styles, "hhhhhhhhhhhhhhh");
    return (
        <div className={styles.cardcontainer}>
            <div className="card-content">
                <h2 className={styles.cardheading}>{heading}</h2>
                <p className="card-subheading">{subheading}</p>
            </div>
        </div>
    );
};

export default HorizontalCard;
