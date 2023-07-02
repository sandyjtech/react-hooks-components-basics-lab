import React from "react";

function NavBar(props) {
  return (<>
    {props.children}</>
  );
}

function Home(props) {
  return (<>
    {props.children}</> );
}
function About(props) {
  return (<>
      {props.children}</> );
}

{/* write an <About> component here */}


function App(props) {
  return (
    <div>
    <NavBar>  <nav> <a href="#home">I'm a link!</a> </nav></NavBar>  
      <Home>   <div id="home">  <h1>Home</h1> </div></Home>
      <About><div id="about"></div></About>
          </div>
  );
}

export default App;
