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
  const keyNavigate = (event) => {
    if (event.which == 38 || event.which == 78) {
      props.movement("n")
    } else if (event.which == 40 || event.which == 83) {
      props.movement("s");
    } else if (event.which == 39 || event.which == 69) {
      props.movement("e");
    } else if (event.which == 37 || event.which == 87) {
      props.movement("w");
    }
  }

  return (
    <div onKeyDown={(e) => keyNavigate(e) } tabIndex="0">
    <StyledButton type="button" onClick={() => { props.movement(props.direction);} }>
      <img
        src={ArrowImage}
        style={{
          transform: `rotate(${directions[props.direction]})`,
          width: "50px"
        }}
        alt="a directional arrow"
      />
    </StyledButton>
    </div>
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
