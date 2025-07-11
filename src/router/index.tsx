
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

import LogLayout from "../layouts/LogLayout";
import LogIn from "../pages/Log/LogIn";
import SignUp from "../pages/Log/SignUp";
import WorkSpace from "../layouts/Workspace";
import Dashboard from "../pages/WorkSpace/Dashboard";
import Projects from "../pages/WorkSpace/Projects";
import Teams from "../pages/WorkSpace/Teams";
import Inbox from "../pages/WorkSpace/Inbox";





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
        <Route path='work-space' element={<WorkSpace />} >
          <Route index path='dashboard' element={<Dashboard />} ></Route>
          <Route path='projects' element={<Projects />} ></Route>
          <Route path='teams' element={<Teams />} ></Route>
          <Route path='inbox' element={<Inbox />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

