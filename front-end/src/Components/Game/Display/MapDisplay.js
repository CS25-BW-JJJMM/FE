import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../../utils/axios";

const myAxios = axios.axiosHeaders();

const MapDisplay = props => {
  useEffect(() => {
    myAxios
      .get("/api/rooms/")
      .then(res => {
        console.log(res);
        setMap(res.data.rooms);
      })
      .catch(err => console.log("map", err));
  }, []);

  const [map, setMap] = useState("");

  return (
    <div>
      <span>{map}</span>
    </div>
  );
};

export default MapDisplay;
