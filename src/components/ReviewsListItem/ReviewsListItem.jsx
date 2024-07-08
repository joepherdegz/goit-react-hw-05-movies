// src/components/ReviewListItem.js
import React from 'react';

const ReviewsListItem = ({ author, content }) => (
  <li>
    <h3>{author}</h3>
    <p>{content}</p>
  </li>
);

export default ReviewsListItem;
