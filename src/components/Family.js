import React from "react";
import SingleMember from "./SingleMember";
import "./family.css";

const members = [
  {
    id: 1,
    name: "Anowar",
    birthYear: 1994,
    skill: "React",
  },
  {
    id: 2,
    name: "Pasa",
    birthYear: 1995,
    skill: "Angular",
  },
  {
    id: 3,
    name: "Ahil",
    birthYear: 2021,
    skill: "Vue",
  },
  {
    id: 4,
    name: "Kajal",
    birthYear: 1996,
    skill: "Javascript",
  },
  {
    id: 5,
    name: "Arham",
    birthYear: 2020,
    skill: "Css",
  },
  {
    id: 6,
    name: "Rekha",
    birthYear: 1996,
    skill: "Html",
  },
];

const Family = () => {
  return (
    <div className="members-wrapper">
      {members.map((member) => (
        <SingleMember member={member} key={member.id} />
      ))}
    </div>
  );
};

export default Family;
