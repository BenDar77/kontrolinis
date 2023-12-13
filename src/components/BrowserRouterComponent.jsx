import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import RegistrationForm from "./RegistrationForm";
import UsersList from "./UsersList";
import DonorInfo from "./DonorInfo";





const BrowserRouterComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/info" element={<DonorInfo/> } />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default BrowserRouterComponent;
