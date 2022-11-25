
import React from "react";
import Routing from "./Routing";
import { Route, Routes } from 'react-router';
import '../src/App.css'
import Component from "./Component";
import NotFound from "./NotFound";



function App() {
  return (
   <>
   <Routing/>
   <Routes>
    <Route path='/' element={<Component/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   </>
  );
}

export default App;
