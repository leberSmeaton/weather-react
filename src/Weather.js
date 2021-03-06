import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props){
  function handleResponse(response){
    alert(`the weather in ${response.data.name} is ${response.data.main.temp}C`);
  }
  
  let apiKey = "31856a05b9b062fb137620991f56055f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h2>Hello From Weather</h2>
      <ol>
        <li><p>you only have to install/create the react file once.</p></li>
        <li><p>npm start - to start</p></li>
        <li><p>in terminal ... control + c - to end ... every time you close</p></li>
        <li><p>if you want to install any npms you can to stop the browser/terminal npm before you do the install. Eg. control + c, then install. </p></li>
        <li><p>npm install - if nothings working when trying to start, npm install reloads libraries</p></li>
      </ol>
      <Loader
        type="TailSpin"
        color="red"
        height={80}
        width={80}
      />
    </div>
  )
}
