import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

export const Galareya = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/gallery/gallery/')
      .then(response => {
        setImages(response.data.map(item => item.image)); // Adjust according to your API response
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
    setCurrentIndex(previousIndex);
  };

  const handleKeyDown = (e) => {
    if (isOpen) {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "Escape") {
        closeModal();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex]);

  return (
    <section className="galareya">
      <div className="container">
        <h2>Наша галерея</h2>
        <div className="mosaic-gallery">
          {images.map((image, index) => (
            <div
              key={index}
              className={`mosaic-item item-${index + 1}`}
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt="galarey" />
              <div className="overlay">
                <FaEye className="icon" />
              </div>
            </div>
          ))}
        </div>
        
        <h3>Смотреть все <FaArrowRightLong/></h3>
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Enlarged view" />
          <button onClick={(e) => { e.stopPropagation(); handlePrevious(); }}>
            <MdKeyboardDoubleArrowLeft className="previous-button" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleNext(); }}>
            <MdKeyboardDoubleArrowRight className="next-button" />
          </button>
        </div>
      )}
    </section>
  );
};
