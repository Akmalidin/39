import React, { useState, useEffect } from "react";
import axios from "axios";

export const ContactReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/review/reviews/"
        );
        setReviews(response.data);
      } catch (err) {
        setError("Ошибка при получении отзывов");
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length > 4) {
      const reviewSection = document.querySelector(".contact-hero__reviews");
      reviewSection.scrollTop = reviewSection.scrollHeight;
    }
  }, [reviews]);

  return (
    <div className="contact-review">
      <h3>Отзывы</h3>
      <div className="contact-hero__reviews">
        {error ? (
          <p>{error}</p>
        ) : reviews.length > 0 ? (
          reviews.map((review) => (
            <blockquote key={review.id}>
              <p>"{review.message}"</p>
              <cite>– {review.name}</cite>
            </blockquote>
          ))
        ) : (
          <p>Отзывы отсутствуют.</p>
        )}
      </div>
    </div>
  );
};
