import React from "react";

const CardBookmark = (props) => {
  const data = props.item;

  return (
    <div>
      <h4>{data.title}</h4>
      <h5>{data.url}</h5>
      <h5>{data.description}</h5>
    </div>
  );
};

export default CardBookmark;

// "tag": [
//   "redux",
//   "React"
// ],
// "done": false,
// "created": "2020-02-25T15:33:33.130Z",
// "_id": "5e553e5707165fd885a7bbc2",
// "title": "A Redux Reducer is like a Coffee Maker",
// "url": "https://codeburst.io/redux-reducers-are-coffee-makers-8a78dd8bb7a0",
// "description": "I like to think of a Reducer in Redux as a “Coffee Maker”. It takes in an old state and action and brews a new state (Fresh coffee).",
// "importance": 1,
// "rating": 5,
