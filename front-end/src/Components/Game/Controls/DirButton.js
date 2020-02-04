import React from "react";
import styled from "styled-components";
import ArrowImage from "../../../assets/arrow-up.svg";

// css transform directions for arrow
const directions = {
  n: "0deg",
  s: "180deg",
  e: "90deg",
  w: "270deg"
};

// props.direction uses object above to determine
// direction that arrow will be pointing
const DirButton = props => {

  return (
    <StyledButton type="button">
      <img
        src={ArrowImage}
        style={{
          transform: `rotate(${directions[props.direction]})`,
          width: "50px",
        }}
        alt="a directional arrow"
      />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  display: flex;
  background-color: #000000;
  border-radius: 100%;
  border: 2px solid #755b69;
`;

export default DirButton;
