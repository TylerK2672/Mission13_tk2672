// import React, { useState } from 'react';
import './App.css';
import Navbar from './NavBar';
import Home from './views/Home';
import Movies from './views/Movies';
import Podcast from './views/Podcast';

function App() {
  let component

  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break;
    case '/movies':
      component = <Movies />
      break;
    case '/podcast':
      component = <Podcast />
      break;
  }

  return (
    <div>
      <Navbar />
      { component }
    </div>
  );
}

export default App;

// class Welcome extends React.Component {
//   render() {
//     return <h1>Movie Collection</h1>;
//   }
// }

// class Conclusion extends React.Component {
//   render() {
//     return <p>Hope you enjoyed the movie collection!</p>;
//   }
// }

// function MovieLoveButton(props: any) {
//   return (
//     <div>
//       <button onClick={props.click}>Click here to show your love for movies!</button>
//     </div>
//   )
// }

// function MovieLove(props: any) {
//   return (
//     <div>
//       <p>I love movies x {props.love}!</p>
//     </div>
//   )
// }

// function App() {

//   const  [count, setCount] = useState(0);
//   const incrementMovieLove = () => setCount(count + 1) //pointer to function, not a function

//   return (
//     <div>
//       <Welcome />
//       <br />
//       <JoelHiltonImg />
//       <MovieLoveButton click={incrementMovieLove}/>
//       <MovieLove love={count} />
//       <br />
//       <Conclusion />
//     </div>
//   );
// }

// export default App;
