import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// Roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Competition from './components/Competition';
import Education from './components/Education';
import Layout from './components/Layout';
import Paper from './components/Paper';
import Profile from './components/Profile';
import Project from './components/Project';
import Skill from './components/Skill';
import Training from './components/Training';
import Work from './components/Work';
import jsonData from './data.json'

const menuList: { [key: string]: React.ReactNode} = {
  profile: <Profile />,
  skill: <Skill skillList={jsonData.skill} />,
  work: <Work workList={jsonData.work} />,
  project: <Project projectList={jsonData.project} />,
  training: <Training trainingList={jsonData.training} />,
  education: <Education educationList={jsonData.education} />,
  competition: <Competition competitionList={jsonData.competition}/>,
  paper: <Paper paperList={jsonData.paper}/>
}

const App = () => {
  const routeElementList = Object.keys(menuList).map(v => <Route key={v} path={v} element={menuList[v]} />)
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout menuList={Object.keys(menuList)} />}>
          <Route index element={<Profile />} />
          {routeElementList}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App
