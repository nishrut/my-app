import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import DeleteConfirmation from "./components/UI/DeleteConfirmation";

function App() {
  const [deleteConfirmation, showDeleteConfirmation] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState();
  const [iDtoDelete, setIDtoDelete] = useState();

  const [usersList, setUsersList] = useState([
    {
      name: "Nishrut",
      age: "21",
      id: Math.random().toString(),
    },
    {
      name: "Henil",
      age: "18",
      id: Math.random().toString(),
    },
  ]);

  const addUserHandler = (uName, uAge, index) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  // const deleteConfirmationDialog = (id) => {};

  const deleteUserHandler = (id) => {
    setIDtoDelete(id);
    const elementToDelete = usersList.find((user) => user.id === id);
    setDeleteMessage({
      title: "You want to delete below entry?",
      message: `${elementToDelete.name} (${elementToDelete.age} years old)`,
    });
    // clickConfirmYesHandler();
    showDeleteConfirmation(true);
    // setUsersList((prevList) => prevList.filter((user) => user.id !== id));
    console.log(id);
  };

  const clickConfirmYesHandler = (e) => {
    setUsersList((prevList) =>
      prevList.filter((user) => user.id !== iDtoDelete)
    );
    showDeleteConfirmation(false);
  };

  const clickConfirmNoHandler = (e) => {
    showDeleteConfirmation(false);
  };

  return (
    <div>
      {deleteConfirmation && (
        <DeleteConfirmation
          title={deleteMessage.title}
          message={deleteMessage.message}
          onClickConfirmYes={clickConfirmYesHandler}
          onClickConfirmNo={clickConfirmNoHandler}
        />
      )}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDeleteUser={deleteUserHandler} />
      {/* <UsersList users={usersList} onDeleteUser={deleteConfirmationDialog} /> */}
    </div>
  );
}

export default App;
