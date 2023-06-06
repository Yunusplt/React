import React, { memo } from "react";
import UserItem from "./UserItem";

const Users = ({kisiler}) => {
  console.log("USERS COMPONENT RENDERED");

  return (
    <div className="users">
      {kisiler.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default memo(Users);
