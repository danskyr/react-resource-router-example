import React from "react";
import {
  createResource,
  Link,
  useResource,
  useRouterActions
} from "react-resource-router";
import { dogsRoute } from "../routes";
import "./styles.css";

export const homeResource = createResource({
  type: "HOME",
  getKey: () => "home",
  getData: () =>
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json() as Promise<{ message: Object }>)
      .then((json) => json.message),
  maxAge: 1000000
});

const formatData = (data) => {
  const breeds = Object.keys(data).slice(0, 24);
  breeds.push("cat");
  return breeds;
};

const Home = () => {
  const { data, loading, error } = useResource(homeResource);
  const { push } = useRouterActions();
  if (error) {
    push("/error");
  }
  console.log("e", data);

  let breeds = [];
  if (data) {
    breeds = formatData(data);
  }

  return (
    <div>
      <h1>Dog Breeds</h1>
      {loading ? (
        <h2>Stay tuned!</h2>
      ) : (
        <>
          <section>
            <ul>
              {breeds.map((breed) => (
                <li key={breed}>
                  <Link to={dogsRoute} query={{ name: breed }}>
                    {breed}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
