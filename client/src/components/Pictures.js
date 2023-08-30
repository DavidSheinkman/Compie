import React, { Fragment, useEffect, useState } from "react";
import styles from "./Pictures.module.css";
import PictureItem from "./PictureItem";



const Pictures = () => {
  const [backendData, setBackendData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredPictures, setFilteredPictures] = useState([]); 

  useEffect(() => {
    fetch(`/api`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          
          setBackendData(data)
          setFilteredPictures(data); 
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
       
        setBackendData([])
        
        setFilteredPictures([]); 
      });
  }, []);

  useEffect(() => {
    
    const filtered = backendData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPictures(filtered);
  }, [searchTerm, backendData]);



  return (
    <Fragment>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by name or artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredPictures.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.gridContainer}>
          {filteredPictures.map((item) => (
            <div className={styles.pictureItem} key={item.id}>
              <PictureItem
                key = {item.id}
                item={item}
              />
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Pictures;
