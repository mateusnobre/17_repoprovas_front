import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import SignIn from './pages/Login'
import SignUp from './pages/SignUp'
import ExamsByCourse from './pages/ExamsByCourse'
import ExamsByLecturer from './pages/ExamsByLecturer'
import SeeExams from "./pages/SeeExams";
import SendExam from './pages/SendExam'
import ExamsFeedByCourse from './pages/ExamsFeedByCourse'
import ExamsFeedByLecturer from './pages/ExamsFeedByLecturer'

import FilterContext from "./FilterContext";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import { useState } from 'react';

export default function App() {
  const [filter, setFilter] = useState({lecturer: '', course: ''})
  return (
    <FilterContext.Provider value={{filter, setFilter}}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/exams">
          <SeeExams />
        </Route>
        <Route path="/exams-by-lecturer">
          <ExamsByLecturer />
        </Route>
        <Route path="/exams-by-course">
          <ExamsByCourse />
        </Route>
        <Route path="/new-exam/">
          <SendExam />
        </Route>
        <Route path="/exams-feed-by-course/:courseId">
          <ExamsFeedByCourse />
        </Route>
        <Route path="/exams-feed-by-lecturer/:lecturerId">
          <ExamsFeedByLecturer />
        </Route>
      </Switch>
    </Router>
    </FilterContext.Provider>
  );
}
