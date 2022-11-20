import React from "react";

const persons = [
  {
    id: 1,
    name: "Noyan",
    age: 27,
    skill: "React",
  },
  {
    id: 2,
    name: "Sarmin",
    age: 28,
    skill: "Angular",
  },
  {
    id: 3,
    name: "Sultana",
    age: 28,
    skill: "Vue",
  },
  {
    id: 4,
    name: "Sania",
    age: 27,
    skill: "Javascript",
  },
  {
    id: 5,
    name: "Pinky",
    age: 27,
    skill: "Redux",
  },
];
const Persons = () => {
  return (
    <div>
      {persons.map((person) => (
        <h1 key={person.id}>
          I am {person.name} ,age {person.age}, I'm good at {person.skill}
        </h1>
      ))}
    </div>
  );
};

export default Persons;
