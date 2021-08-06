import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import ExamsByCourse from './pages/ExamsByCourse'
import ExamsByLecturer from './pages/ExamsByLecturer'
import SeeExams from "./pages/SeeExams";
import SendExam from './pages/SendExam'
import ExamsFeed from './pages/ExamsFeed'

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
        <Route path="/exams-feed/:id">
          <ExamsFeed />
        </Route>
      </Switch>
    </Router>
    </FilterContext.Provider>
  );
}
