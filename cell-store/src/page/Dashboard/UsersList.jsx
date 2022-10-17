import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { getAllUsers } from "../../redux/actions/userActions";
import UsersContainer from "./UsersContainer";
import s from "./UsersList.module.css";

const UsersList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={`list ${s.list}`}>
      <Sidebar />
      <div className={`listContainer ${s.listContainer}`}>
        <UsersContainer users={users} />
      </div>
    </div>
  );
};

export default UsersList;
