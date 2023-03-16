import { useMutation, useQuery } from "@apollo/client";
import { useRef, useState } from "react";
import { ADD_USER } from "./api/mutations";
import { GET_USERS } from "./api/queries";

function App() {
  const { loading, data, error } = useQuery(GET_USERS);
  const [addUser, addUserProps] = useMutation(ADD_USER);

  const nameRef = useRef(null);
  const ageRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const age = elements.age.value;
    const name = elements.name.value;
    addUser({
      variables: {
        name,
        age,
      },
    });
  }

  if (error) return <div>Some error occurred</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data.users.map((user) => (
        <div key={user.name}>
          <h1>{user.name}</h1>
          <h2>{user.age}</h2>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Enter name" ref={nameRef} />
        <input name="age" placeholder="Enter age" ref={ageRef} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
