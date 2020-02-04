import React from "react";
import styled from "styled-components";
import DirButton from "./DirButton";

import "../../../../node_modules/nes.css/css/nes.min.css";

const ControlPad = props => {
  return (
    <ControlsWrapper className="nes-container is-rounded">
      <DirButton direction="w" />
      <MiddleButtons>
        <DirButton direction="s" />
        <DirButton direction="n" />
      </MiddleButtons>
      <DirButton direction="e" />
    </ControlsWrapper>
  );
};

const ControlsWrapper = styled.div`
  max-width: 175px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const MiddleButtons = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;

export default ControlPad;
