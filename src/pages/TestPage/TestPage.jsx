import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import PhotoDisplay from "../../components/PhotoDisplay/PhotoDisplay";

const TestPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-[100vh]">
      <PhotoDisplay photoURL={user?.photoURL}></PhotoDisplay>
    </div>
  );
};

export default TestPage;
