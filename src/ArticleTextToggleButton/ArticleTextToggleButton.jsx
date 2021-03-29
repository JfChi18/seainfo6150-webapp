import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {
    const handleClick = () => {
        props.onClick();
    };
    
    return (
        <button className={styles.button} onClick={handleClick}>{props.buttonText}</button>  
    );
};

ArticleTextToggleButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
}

export default ArticleTextToggleButton;