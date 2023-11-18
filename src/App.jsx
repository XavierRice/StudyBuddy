import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

//PAGES
import Home from './Pages/Home'
import Index from './Pages/Index'
import Show from './Pages/Show'
import FourOFour from './Pages/FourOFour'


//COMPONENTS
import NoteDetails from './Components/NoteDetails'
import NoteEditForm from './Components/NoteEditForm'

function App() {
 

  return (
    <div className='App'>
      <Router>
      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Index />} />
        <Route path="/users/:id" element={<Show/>}/>
        <Route exact path="/users/:id/notes/:note_id" element={<NoteDetails/>}/>
        <Route exact path="/users/:id/edit" element={<NoteEditForm />} />
      </Routes>
      </main>
      </Router>
    </div>
  )
}

export default App
