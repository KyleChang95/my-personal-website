import React from 'react';
import './App.css';
// Roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/Navbar';
import Competition from './components/Competition';
import Education from './components/Education';
import Paper from './components/Paper';
import Profile from './components/Profile';
import Project from './components/Project';
import Skill from './components/Skill';
import Training from './components/Training';
import Work from './components/Work';
import jsonData from './data.json';

const menuList: { [key: string]: React.ReactNode } = {
  profile: <Profile />,
  skill: <Skill skillList={jsonData.skill} />,
  work: <Work workList={jsonData.work} />,
  education: <Education educationList={jsonData.education} />,
  project: <Project projectList={jsonData.project} />,
  training: <Training trainingList={jsonData.training} />,
  competition: <Competition competitionList={jsonData.competition} />,
  paper: <Paper paperList={jsonData.paper} />,
};

export default function App() {
  return (
    <div>
      <Navbar menuList={Object.keys(menuList)} />
      {Object.values(menuList)}
    </div>
  );
}
