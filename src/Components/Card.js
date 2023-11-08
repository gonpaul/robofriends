import React from "react";
import 'tachyons';

const Card = (props) => {
  const { id, name, email } = props
  return (
    <div className="bg-light-green dib br3 pa3 ma2 mt3 grow tc bw2 shadow-5">
      <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
};

export default Card;