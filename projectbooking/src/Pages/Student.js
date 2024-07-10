import React from 'react';
import './Dashboard.css';

const rooms = [
  {
    imgSrc: 'hostel-1.jpeg',
    title: 'Don Quihote',
    price: '$40'
  },
  {
    imgSrc: 'Hostel-room-types-Freehand-Los-Angeles.jpeg',
    title: 'The Great Gatsby',
    price: '$24.99'
  },
  {
    imgSrc: 'images (2).jpeg',
    title: 'One Years of Solitude',
    price: '$20'
  },
  {
    imgSrc: 'images (9) - Copy.jpeg',
    title: 'In Search of Lost Time',
    price: '$19.99'
  }
];

const ViewRoom = () => {
  return (
    <div>
      <header>
        <h1>VIEW HOSTEL ROOM</h1>
      </header>
      <div className="room-container">
        {rooms.map((room, index) => (
          <div key={index} className="column1">
            <img className="img" src={room.imgSrc} alt={room.title} width="100%" height="250px" />
            <span>{room.title}</span>
            <span>{room.price}</span>
            <button className="btn btn-primary" type="button">CHOOSE ROOM</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewRoom;
