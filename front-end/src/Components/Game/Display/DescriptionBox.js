import React from "react";
import styled from "styled-components";

const DescriptionBox = props => {
  return <BoxWrapper>
  <TextWrapper>
    <Text>{props.description}</Text>
  </TextWrapper>
  </BoxWrapper>;
};

const BoxWrapper = styled.div`
  max-width: 500px;
  width: 100%;
`;

const TextWrapper = styled.div`
  background-color: #000000;
  padding: 5%;
  border: 3px solid #755b69;
  border-radius: 30px;
`

const Text = styled.p`
  font-family: "Press Start 2P", monospace;
  color: #d1af36;
`

export default DescriptionBox;
