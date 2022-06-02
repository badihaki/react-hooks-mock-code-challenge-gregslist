import React, { useState } from "react";

function ListingCard({ listing, deleteFunct }) {
  /*
  will need useState to determine if there is a like
  listing.image for image
  listing.description
  listing.location
  */
 const [liked, setLiked] = useState(false);

 function handleLike(){
   setLiked(!liked);
 }

 function handleDeleteItem(){
  deleteFunct(listing);
 }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {liked ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLike}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
