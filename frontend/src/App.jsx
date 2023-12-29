
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Create';
import Read from './Read'
import Update from './Update'
import Edit from './Edit';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Read/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/update' element={<Update/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
