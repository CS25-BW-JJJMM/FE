import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  MarkSeries
} from "react-vis";
import axios from "../../../utils/axios";

const myAxios = axios.axiosHeaders();

const MapDisplay = props => {
  useEffect(() => {
    myAxios
      .get("/api/rooms/rooms/")
      .then(res => {
        console.log(res);
        setMap(res.data);
      })
      .catch(err => console.log("map", err));
  }, []);

  const [map, setMap] = useState([]);

  const plots = map.map(room => {
    return { x: room.x, y: room.y };
  });
  let marker = { x: 0, y: 0 };
  if (map.length) {
    let playerPos = map[props.currentRoom];
    console.log(playerPos);
    marker = { x: playerPos.x, y: playerPos.y };
  }
  // let marker = { x: 0, y: 0 };
  // if (props.currentRoom) {
  //   marker = { ...plots[props.currentRoom] };
  // }
  console.log("marker: ", marker);
  console.log("coord ", plots);

  return (
    <div>
      <FlexibleXYPlot width={600} height={400}>
        <MarkSeries
          data={plots}
          highlight="black"
          className="player"
          color={"yellow"}
        />
        <MarkSeries data={[marker]} />
        {/* <LineSeries data={plots} fill="dashed"/> */}
      </FlexibleXYPlot>{" "}
    </div>
  );
};

export default MapDisplay;
