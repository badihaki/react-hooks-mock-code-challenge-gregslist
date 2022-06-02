import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {searchTerm} ) {
  const [listings, setListings] = useState([]);
  // useeffect to get the data, then map the data to listing cards
  useEffect( ()=> {
    //
    fetch("http://localhost:6001/listings").then(r=>r.json()).then(data => {
      setListings(data);
    })
  }, [])

  function handleDeleteItem(searchListing){
    const newListings = listings.filter( (listing) => {
      return listing !== searchListing;
    })
    fetch(`http://localhost:6001/listings/${searchListing.id}`,{
      method: "DELETE",
    }).then( (r)=> r.json() ).then(()=>{
      setListings(newListings);
    })
    // must persist this with a FETCH--DELETE request
  }

  // I should track what I'm searching for through state
  const filteredListings = listings.filter( (listing)=>{
    return listing.description.toLowerCase().includes(searchTerm);
  })

  const listingCards = filteredListings.map( (listing)=>{
    return <ListingCard key={listing.id} listing={listing} deleteFunct={handleDeleteItem} />
  })
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
