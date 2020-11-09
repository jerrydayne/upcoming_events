import React from 'react';

const List = ({eventz}) => {
  return (
    <>
      {eventz.map((event) =>{
        const {id, name, category, location, message, status, date, image} = event;
        return (
          <article className="event" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{message}</p>
              <div>
                <span><small className="details"> Date: {date} </small></span>
                <span><small className="details"> Location: {location} </small></span>
              </div>
              <div>
                <span><small className="details"> Category: {category} </small></span>
                <span><small className="details"> Status: {status} </small></span>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
