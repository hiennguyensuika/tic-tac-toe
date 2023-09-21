import React from "react";
import "./App.css";
import Game from "./components/Game";

// const nightSky = new URL("/image/nightsky.jpeg",import.meta.url)
// const nightSkyBackground = "/image/nightsky.jpeg";
// const divStyle = {
//     backgroundImage: `url(${nightSkyBackground})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
// }

function App() {
return <>
    {/* <div className="night-sky-picture" style={divStyle}>
        <img src={nightSky} alt= "Sky"/> */}
        <div className="container">
        <Game />
         </div>
    {/* </div> */}
    </>
}

export default App;
