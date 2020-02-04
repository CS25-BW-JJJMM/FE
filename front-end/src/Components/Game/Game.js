import React from "react";
import styled from "styled-components";
import ControlPad from "./Controls/ControlPad";
import DescriptionBox from "./Display/DescriptionBox";

export default function Game(props) {
  return (
    <div>
      <ControlPad />
      <DescriptionBox description="Whoop whoop where we at!" />
    </div>
  );
}
