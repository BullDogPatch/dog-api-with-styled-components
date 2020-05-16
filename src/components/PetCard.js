import React from "react";
import styled from "styled-components";

// <div> used to have className="dog-card"
// <img> used to have className="dog-image"

const Card = styled.div`
  background: #99f3eb;
  color: black;
  width: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const DogImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
`;

const PetCard = props => {
  return (
    <Card>
      <DogImage alt="random dog" src={props.imgUrl} />
      <h2>{props.breed}</h2>
    </Card>
  );
};
export default PetCard;
