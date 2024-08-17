import React, { useState, useEffect, useCallback } from "react";
import { FaEye } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Gallerys = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/gallery/gallery/")
      .then((response) => {
        setImages(response.data.map((item) => item.image)); // Adjust according to your API response
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const handleImageClick = useCallback(
    (index) => {
      setSelectedImage(images[index]);
      setCurrentIndex(index);
      setIsOpen(true);
    },
    [images]
  );

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      return nextIndex;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const previousIndex = (prevIndex - 1 + images.length) % images.length;
      setSelectedImage(images[previousIndex]);
      return previousIndex;
    });
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (isOpen) {
        if (e.key === "ArrowRight") {
          handleNext();
        } else if (e.key === "ArrowLeft") {
          handlePrevious();
        } else if (e.key === "Escape") {
          closeModal();
        }
      }
    },
    [isOpen, handleNext, handlePrevious]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <section className="gallerys">
      <div className="gallerys__header">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaCircleArrowLeft />
        </button>
        <div className="container">
          <h2>Наша галерея</h2>
        </div>
      </div>
      <div className="container">
        <div className="mosaic-gallery">
          {images.map((image, index) => (
            <div
              key={index}
              className={`mosaic-item item-${index + 1}`}
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt={`Gallery item ${index + 1}`} />
              <div className="overlay">
                <FaEye className="icon" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            className="modal-content"
            src={selectedImage}
            alt="Enlarged view"
          />
          <button
            className="previous-button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
          <button
            className="next-button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      )}
    </section>
  );
};
