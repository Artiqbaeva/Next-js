import Users from "@/components/Users";
import React from "react";

const UsersPage = async () => {
  const data = await fetch("https://dummyjson.com/users", {cache: "force-cache"});
  const users = await data.json();

  return <div><Users data={users}/></div>;
};

export default UsersPage;
