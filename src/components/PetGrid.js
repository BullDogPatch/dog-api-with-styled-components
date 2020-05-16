import React, { useEffect, useState } from "react";
import axios from "axios";
import PetCard from "./PetCard";
import styled from "styled-components";

// Define Styled Components outside of the render method
// It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass. Defining a styled component within the render method will thwart caching and drastically slow down rendering speed, and should be avoided.
const DogButton = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => (props.warning ? "hotpink" : "#2a2223")};
  color: #ffffff;
  border: 0;
  margin: 5px 10px;
  &:hover {
    background: #ffffff;
    color: #2a2223;
  }
`;

const Infobutton = styled(DogButton)`
  color: white;
  background: #17a2b8;
`;

export default function PetGrid() {
  // https://dog.ceo/api/breed/hound/images/random/15
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("mix");

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
      .then(response => {
        const doggos = response.data.message;
        console.log("doggos", doggos);
        setPets(doggos);
      })
      .catch(error => {
        console.log("Sorry no doggos", error);
      });
  }, [breed]);

  return (
    <div className="container">
      <DogButton warning={true} onClick={() => setBreed("mastiff")}>
        Mastiff
      </DogButton>
      <Infobutton onClick={() => setBreed("labrador")}>Labrador</Infobutton>
      <div className="entry">
        {pets.map(item => {
          return <PetCard key={item} breed={breed} imgUrl={item} />;
        })}
      </div>
    </div>
  );
}
