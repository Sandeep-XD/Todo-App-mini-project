import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../lib/appwrite/conf";
import { logout } from "../../features/auth/authSlice";
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  return (
    <button className="btn btn-primary" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutBtn;
