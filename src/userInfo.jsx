import React, { useState } from "react";
import Data from "./data";
function User() {
  const dummyData = {
    name: "",
    main: {
      feels_like: "Nothing",
      temp: "",
      pressure: "",
      humidity: "",
    },
    weather: [
      {
        icon: "01d",
        description: "Data not available for your location",
      },
    ],
    wind: {
      speed: "",
    },
  };

  const setUserLocation = (user) => {
    const lat = user.coords.latitude;
    const long = user.coords.longitude;
    const userUrl =
      "api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      long +
      "&appid=566958a4af4b7283ada47bd213c7c1a1";
    console.log(userUrl);
    fetch(userUrl)
      .then((Response) => {
        if (Response.ok) {
          return Response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((Data) => setData(Data))
      .then(
        (document.getElementById("data-container-onload").style.display =
          "inherit")
      )
      .catch((err) => {
        console.log(err);
        setData(dummyData);
      });
    console.log(data);
  };

  const [data, setData] = useState(dummyData);
  window.navigator.geolocation.getCurrentPosition(
    setUserLocation,
    console.log,
    { timeout: 5000 }
  );

  return (
    <div id="data-container-onload">
      <Data data={data} />
    </div>
  );
}
export default User;
