
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import Layout from "./Layout/Layout";


function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
