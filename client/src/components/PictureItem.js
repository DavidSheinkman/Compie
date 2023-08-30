import React, { useState,Fragment } from "react";
import styles from "./PictureItem.module.css";
import { Link } from "react-router-dom";

const PictureItem = ({ item }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <Fragment>
    {showInfo && (
      <div className={styles.InfoTooltip}>
        
        resolution: {item.resolution} 
        <div>weight: {item.weight}</div>
        
       
      
      </div>
    )}
    <div
      className={styles.pictureItem}
      
    >
      
      <div className={styles.modalContent}>
      
        <Link to={`picture/${item.id}`}>
          <img onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className={styles.Image} src={item.url} alt={item.title} />
        </Link>
        <Link className={styles.link} to={`picture/${item.id}`}>
        <h2 className={styles.Title}>{item.title}</h2>
        </Link>
        <p className={styles.Artist}>By {item.artist}</p>
        <p className={styles.Description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
       
        
      </div>
    </div>
    </Fragment>
  );
};

export default PictureItem;
