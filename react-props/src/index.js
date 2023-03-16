import React from "react";
import ReactDOM from "react-dom";

function Card(props){
return(
<div>
  <h2>{props.name}</h2>
  <img 
  src = {props.img}
  alt="avatar_img"
  />
  <p>{props.tel}</p>
  <p>{props.email}</p>
</div>
);
}

ReactDOM.render(
  <div className="my-Style">
    <h1>My Contacts</h1>

    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />

    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />

  </div>,
  document.getElementById("root")
);
