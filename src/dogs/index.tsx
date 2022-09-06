import React from "react";
import "./styles.css";
import BackButton from "../common/backButton";
import {
  createResource,
  useQueryParam,
  useResource
} from "react-resource-router";

export const RefreshButton = () => {
  return <button onClick={() => null}>Another!</button>;
};

export const dogsResource = createResource({
  type: "DOGS",
  getKey: () => "dogs-resource-key",
  getData: async ({ query }) => {
    const { name } = query;
    const response = await fetch(
      `https://dog.ceo/api/breed/${name}/images/random`
    );
    const result: { message: string } = await response.json();

    return result.message;
  }
});

const Dogs = () => {
  const { data, loading } = useResource(dogsResource);
  const [name] = useQueryParam("name");

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <BackButton />
        <RefreshButton />
      </div>
      {loading || <img src={data} alt="A cute dog!" />}
      {loading && <p>loading</p>}
    </div>
  );
};

export default Dogs;
