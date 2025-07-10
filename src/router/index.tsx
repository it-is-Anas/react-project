
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

import LogLayout from "../layouts/LogLayout";
import LogIn from "../pages/Log/LogIn";
import SignUp from "../pages/Log/SignUp";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LandingPage />} ></Route>
        <Route path='/log' element={<LogLayout />} >
          <Route index path='' element={<LogIn />} ></Route>
          <Route path='sign-up' element={<SignUp />} ></Route>
          {/* <Route path='/sign-up' element={<SignUp />} ></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

