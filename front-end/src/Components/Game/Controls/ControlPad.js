import React from "react";
import styled from "styled-components";
import DirButton from "./DirButton";

// holds the directional buttons, points them via props
const ControlPad = props => {
  return (
    <Panel>
      <ControlsWrapper>
        <DirButton direction="w" />
        <MiddleButtons>
          <DirButton direction="n" />
          <DirButton direction="s" />
        </MiddleButtons>
        <DirButton direction="e" />
      </ControlsWrapper>
    </Panel>
  );
};

const Panel = styled.div`
  max-width: 200px;
  width: 100%;
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #35654d;
  border-style: solid;
  border-color: #755b69;
  border-width: 3px;
  border-radius: 60px;
`;

const MiddleButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 125px;
  margin: 10px 2%;
`;

export default ControlPad;
