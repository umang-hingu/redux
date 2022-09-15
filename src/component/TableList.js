import TableItem from "./TableItem";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";



const TableList = () => {
  const [loadedData, setLoadedData] = useState([]);

  const fetchdata = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setLoadedData(resData.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {loadedData.map((user) => (
            <TableItem
              key={user.id}
              fname={user.first_name}
              lname={user.last_name}
              email={user.email}
              id={user.id}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableList;
