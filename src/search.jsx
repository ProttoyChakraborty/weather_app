import React, { useState } from "react";
import Data from "./data";
function Search() {
  const dummyData = {
    name: "",
    main: {
      feels_like: "Nothing",
      temp: 0,
      pressure: 0,
      humidity: 0,
    },
    weather: [
      {
        icon: "01d",
        description:
          "unavailable for this location, only places on Earth supported at the moment 😥",
      },
    ],
    wind: {
      speed: 0,
    },
  };

  const [data, setData] = useState(dummyData);
  // Detect users location and update DOM

  const get = (event) => {
    const query = document.getElementById("search").value;
    console.log(query);
    const apiKey = "566958a4af4b7283ada47bd213c7c1a1";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      query +
      "&units=metric&appid=" +
      apiKey;

    event.preventDefault();
    fetch(url)
      .then((Response) => {
        if (Response.ok) {
          return Response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((Data) => setData(Data))
      .then(
        (document.getElementById("data-container").style.display = "inherit")
      )
      .catch((err) => {
        console.log(err);
        setData(dummyData);
      });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="CityName"
          name="City"
          id="search"
          autoComplete="off"
        />
        <button
          id="search_button"
          title="search"
          type="submit"
          onClick={get}
        ></button>
      </form>
      <div id="data-container">
        <Data data={data} />
      </div>
    </div>
  );
}
export default Search;
