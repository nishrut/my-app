import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  let renderListOfUser = "No Data Found..";

  const onDeleteUserHandler = (id) => {
    props.onDeleteUser(id);
  };

  if (props.users.length > 0) {
    renderListOfUser = (
      <ul>
        {props.users.map((user) => (
          <div key={user.id}>
            {console.log(user.name)}
            <li>
              <div>
                {user.name} ({user.age} years old)
              </div>
              <div>
                <Button ownOnClick={onDeleteUserHandler.bind(this, user.id)}>
                  Delete
                </Button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    );
  }

  return (
    <Card ownClassName={classes.users}>
      <div className={classes.noDataFound}>{renderListOfUser}</div>
    </Card>
  );
};

export default UsersList;
