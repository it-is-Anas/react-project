
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

import LogLayout from "../layouts/LogLayout";
import LogIn from "../pages/Log/LogIn";
import SignUp from "../pages/Log/SignUp";

// import Dashboard from "../pages/WorkSpace/Dashboard";
import WorkSpace from "../layouts/WorkSpace";
import Projects from "../pages/WorkSpace/Projects";
import Project from "../pages/WorkSpace/Project";
import Teams from "../pages/WorkSpace/Teams";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LandingPage />} ></Route>
        <Route path='/log' element={<LogLayout />} >
          <Route index path='' element={<LogIn />} ></Route>
          <Route path='sign-up' element={<SignUp />} ></Route>
        </Route>
        <Route path='work-space' element={<WorkSpace />}>
          <Route path='projects'>
            <Route index element={<Projects />} />
            <Route path=":id" element={<Project />} />
          </Route>
          <Route path='teams' element={<Teams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

