import { Link } from "react-router-dom";
import TableList from "../component/TableList";
import Layout from "../Layout/Layout";

const HomePage = () => {
  const token = localStorage.getItem("token");

  return (
    <Layout>
      {token ? (
        <div>
          <h1>Fetched Data rendered on Table</h1>
          <TableList></TableList>
        </div>
      ) : (
        <div>you are not logged in.<br></br>
        <Link to='/'>Please, Log in by tapping here.</Link></div>
      )}
    </Layout>
  );
};

export default HomePage;
