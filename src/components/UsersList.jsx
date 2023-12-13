import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [searchBlood, setSearchBlood] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);

        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Users are loading, please be patient.</div>;
  }

  const handleBloodSearch = () => {
    const filteredUsers = users.filter(
      (usr) => usr.bloodGroup == searchBlood
    );
    setUsers(filteredUsers);
  };



  return (
    <div>
      <Navbar />
      <div className="users-list d-flex justify-content-center" >
        <h2 className="p-1  m-1 mt-4">Users List</h2>
        <input
          type="text"
          placeholder="Search by bloodtype"
          className="p-1  m-1 mt-4"
          value={searchBlood}
          onChange={(e) => setSearchBlood(e.target.value)}
        />
        <button
          className="p-1  m-1 mt-4"
          onClick={handleBloodSearch}>Search</button>
      </div>
      {users.map((user) => (
        <div key={user.id} className="d-inline-flex">
          <Card style={{ width: "20rem" }} className="m-5">
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
              <Card.Text>Name: {user.firstName}</Card.Text>
              <Card.Text>Lastname: {user.lastName}</Card.Text>
              <Card.Text>Age: {user.age}</Card.Text>
              <Card.Text>Bloodtype: {user.bloodGroup}</Card.Text>
            </Card.Body>
            <a href="/info"><button type="submit">View more</button></a>
          </Card>
        </div>

      ))}


    </div>
  );
};

export default UsersList;
