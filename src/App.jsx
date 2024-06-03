import { useState } from 'react'
import './App.css'
import ContactComponent from './ContactComponent';
import ChatComponent from './ChatComponent';
import ChatAndContact from './ChatAndContact';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatComponentMobile from './ChatComponentMobile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<ChatAndContact/>} path="/"></Route>
            <Route element={<ChatComponentMobile />} path="/chat"></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
