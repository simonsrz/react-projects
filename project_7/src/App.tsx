import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import Error404Page from './components/Error404Page'
import Layout from './components/Layout';
import CarsPage from './components/CarsPage';
import { RecoilRoot } from 'recoil';
import NewCarPage from './components/NewCarPage';
import CarIdPage from './components/CarIdPage';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cars">
              <Route index element={<CarsPage/>}/>
              <Route path="new" element={<NewCarPage />} />
              <Route path=":id" element={<CarIdPage />} />
            </Route>
            <Route path="*" element={<Error404Page />} />
          </Route>

        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
