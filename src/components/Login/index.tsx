import LoginForm from "components/Login/LoginForm";
import UserFormLayout from "components/Layout/UserFormLayout";
import React from "react";

const index = () => {
  return (
    <UserFormLayout>
      <LoginForm formType="page" />
    </UserFormLayout>
  );
};

export default index;
