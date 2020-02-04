import React from "react";
import styled from "styled-components";
import ArrowImage from "../../../assets/icons8-arrow-button.png";

const directions = {
  n: "0deg",
  s: "180deg",
  e: "90deg",
  w: "270deg"
};
const DirButton = props => {
  const whichWay = `transform: rotate(${directions[props.direction]})`;

  return (
    <StyledButton>
      <img
        src={ArrowImage}
        style={{
          transform: `rotate(${directions[props.direction]})`,
          width: "50px"
        }}
      />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 50px;
  border: none;
`;

export default DirButton;
