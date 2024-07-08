// src/components/ReviewListItem.js
import React from 'react';
import css from './ReviewsListItem.module.css'

const ReviewsListItem = ({ author, content }) => (
  <li>
    <h3>{author}</h3>
    <p className={css.contentWrap}>{content}</p>
  </li>
);

export default ReviewsListItem;
