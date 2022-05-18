import React from "react";
import styled from "styled-components";
import one from "../data/shrek/one.png";
import two from "../data/shrek/two.png";
import three from "../data/shrek/three.png";
import four from "../data/shrek/four.png";
import five from "../data/shrek/five.png";
import six from "../data/shrek/six.png";
import seven from "../data/shrek/seven.png";
import eight from "../data/shrek/eight.png";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: cenetr;
  justify-content: space-around;
`;

const Block = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid #333;
  flex-basis: 32%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Slido() {
  let blocks = [
    { id: 1, value: "A", image: one },
    { id: 2, value: "B", image: two },
    { id: 3, value: "C", image: three },
    { id: 4, value: "D", image: four },
    { id: 5, value: "E", image: five },
    { id: 6, value: "F", image: six },
    { id: 7, value: "G", image: seven },
    { id: 8, value: "H", image: eight },
    { id: 9, value: "" },
  ];

  return (
    <Container>
      <Wrapper>
        {blocks.map((block) => (
          <Block key={block.id} id={block.id} src={block.image}></Block>
        ))}
      </Wrapper>
    </Container>
  );
}
