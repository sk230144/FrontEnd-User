import React from 'react'
import List from './components/List'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListDetails from './components/ListDetails';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/users/:userId" element={<ListDetails />} />
      </Routes>
    </Router>
  )
}
