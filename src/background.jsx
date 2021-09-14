import React from "react";
import clearSky from "./assets/videos/Pexels Videos 2782.mp4";
import clearNight from "./assets/videos/Pexels Videos 1877846.mp4";
import thunder from "./assets/videos/pexels-nathan-baldwin-5908584.mp4";
import snow from "./assets/videos/Falling Snowflakes.mp4";
import clouds from "./assets/videos/production ID_4331381.mp4";
import rain from "./assets/videos/production ID_4536559.mp4";
import haze from "./assets/videos/production ID_4763824.mp4";
function Background(props) {
  var video = "";
  var reg2 = new RegExp("0[234][dn]");
  var reg = new RegExp("[01][90][dn]");
  const state = props.load.weather[0].icon;
  if (state === "50d" || state === "50n") {
    video = { clouds }["clouds"];
  } else if (state === "01n") {
    video = { clearNight }["clearNight"];
  } else if (state === "13d" || state === "13n") {
    video = { snow }["snow"];
  } else if (reg.test(state)) {
    console.log("works");
    video = { rain }["rain"];
  } else if (reg2.test(state)) {
    video = { haze }["haze"];
  } else if (state === "11d") {
    video = { thunder }["thunder"];
  } else {
    video = { clearSky }["clearSky"];
  }
  console.log(state);
  console.log(video);
  return (
    <video key={state} autoPlay loop muted id="bck_video">
      <source id="video" src={video} />
    </video>
  );
}
export default Background;
