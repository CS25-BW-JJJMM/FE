import React, { useEffect, useState } from "react";
import styled from "styled-components";

import axiosHeader from "../../utils/axios";
import ControlPad from "./Controls/ControlPad";
import DescriptionBox from "./Display/DescriptionBox";
import MapDisplay from "./Display/MapDisplay";

const myAxios = axiosHeader.axiosHeaders();

export default function Game(props) {
  const [currentRoom, setRoom] = useState({});
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    myAxios
      .get("/api/adv/init/")
      .then(res => {
        console.log(res);
        const { data } = res;
        setRoom({
          title: data.title,
          description: data.description,
          players: data.players,
          roomId: data.room_id
        });
        setName(data.name);
        setError(data.error_msg);
      })
      .catch(err => console.log(err));
  }, []);

  const move = async dir => {
    try {
      const direction = { direction: `${dir}` };
      const movement = await myAxios.post("/api/adv/move/", direction);
      console.log(movement);
      const { data } = movement;
      setRoom({
        title: data.title,
        description: data.description,
        players: data.players,
        roomId: data.room_id
      });
      setError(data.error_msg);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return (
    <div>
      <ControlPad movement={move} />
      <DescriptionBox description={currentRoom.description} error={error} />
      {currentRoom.roomId && <MapDisplay currentRoom={currentRoom.roomId} />}
    </div>
  );
}
