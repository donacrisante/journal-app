import "./EntryList.css";
import { ReactComponent as StarFilled } from "../FavouriteIcon/star-filled.svg";
import { ReactComponent as Star } from "../FavouriteIcon/star.svg";
import { useState } from "react";

export default function EntryList() {
  return (
    <>
      <section>
        <p className="card_date">FEB, 27 2028</p>
        <h3 className="card_title">"That's life in the city"</h3>
        <StarFilled />
        <p>Text content</p>
      </section>
      <section>
        <p className="card_date">FEB, 26 2028</p>
        <h3 className="card_title">"That's life in the city"</h3>
        <Star />
        <p>Text content</p>
      </section>
      <section>
        <p className="card_date">FEB, 25 2028</p>
        <h3 className="card_title">"That's life in the city"</h3>
        <Star />
        <p>Text content</p>
      </section>   
    </>
  );
}

/* export default function FavouriteButton() {
  // this should be a state variable
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <button
      className="favourite-button"
      onClick={() => {
        setIsFavourite(!isFavourite);
        console.log("favourite button clicked");
      }}
      aria-label="favourite"
    >
      {isFavourite ? <StarFilled /> : <Star />}
    </button>
  );
} */