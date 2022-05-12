import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: cenetr;
  justify-content: space-around;
`;

const Block = styled.div`
  border: 1px solid #333;
  flex-basis: 32%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Slido() {
  let blocks = [
    { id: 1, value: "A" },
    { id: 2, value: "B" },
    { id: 3, value: "C" },
    { id: 4, value: "D" },
    { id: 5, value: "E" },
    { id: 6, value: "F" },
    { id: 7, value: "G" },
    { id: 8, value: "H" },
    { id: 9, value: "" },
  ];

  return (
    <Container>
      <Wrapper>
        {blocks.map((block, index) => (
          <Block key={block.id} tabIndex={index + 1} id={block.id}>
            {block.value}
          </Block>
        ))}
      </Wrapper>
    </Container>
  );
}
