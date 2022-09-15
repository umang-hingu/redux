import NavigationBar from "./NavigationBar";

const Layout = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
    </>
  );
};

export default Layout;
