import React from "react";

const SingleMember = ({ member }) => {
  const isMember = false;
  const familyMemberStyle = {
    color: isMember ? "blue" : "black",
    fontSize: "2.5rem",
    backgroundColor: "red",
  };
  return (
    <div className="member">
      <h1 className="family-member" style={familyMemberStyle}>
        {member.name}
      </h1>
      <p>Age:{new Date().getFullYear() - member.birthYear}</p>
      <p>skill: {member.skill}</p>
    </div>
  );
};

export default SingleMember;
