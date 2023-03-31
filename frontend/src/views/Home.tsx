import React from 'react';

function JoelHiltonImg() {
  return (
    <div className="row">
      <div className="col-2">
        <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton Headshot" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <JoelHiltonImg />
      <p className="col-3">
        Welcome to my site! Above is a navbar where you can navigate to the list
        of movies I have, or check out my podcast!
      </p>
    </div>
  );
}
