// src/components/Reviews.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/api';
import ReviewListItem from 'components/ReviewsListItem/ReviewsListItem';
import css from './ReviewsList.module.css'

const ReviewsList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <div>
          <div className={css.titleWrap}><h1>Reviews</h1></div>
          <ul className={css.listWrap}>
            {reviews.map(({ id, author, content }) => (
              <ReviewListItem
                key={id}
                author={author}
                content={content}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className={css.noticeWrap}>We don't have any reviews for this movie!</div>
      )}
    </>
  );
};

export default ReviewsList;
