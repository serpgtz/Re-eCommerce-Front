import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Delete from "./Delete.jsx";
const UserWindow = ({ user, modbox }) => {
  const [tribute, setTribute] = useState({});
  const handleTribute = (e) => {
    setTribute(e.target.returnvalue);
    console.log("first");
  };

  return (
    <>
      <dialog
        open={modbox}
        returnvalue={tribute}
        onChange={(e) => handleTribute(e)}
      >
        <p>Detalles de usuario</p>
        <p>{user?._id}</p>
        <p>{user?.username}</p>
        <p>{user?.email}</p>
        <button>Coronar como admin</button>
        <Delete id={user?.id} />
      </dialog>
    </>
  );
};

export default UserWindow;
