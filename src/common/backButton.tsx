import React from "react";
import { useRouterActions } from "react-resource-router";

const BackButton = () => {
  const { goBack } = useRouterActions();
  return <button onClick={goBack}>Go Back</button>;
};

export default BackButton;
