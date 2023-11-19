import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

//PAGES
import Home from './Pages/Home'
import Index from './Pages/Index'
import Show from './Pages/Show'
import New from './Pages/NewUser'
import FourOFour from './Pages/FourOFour'


//COMPONENTS
import NoteDetails from './Components/NoteDetails'
import NoteEditForm from './Components/NoteEditForm'
import UserEditFrom from './Components/UserEditForm'
import Header from './Components/Header'
import NewNote from './Components/NewNoteForm'

function App() {


  return (
    <div className='App'>
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Index />} />
            <Route path="/users/:id" element={<Show />} />
            <Route path="users/new" element={<New/>}/>
            <Route path="users/:id/new" element={<NewNote/>}/>
            <Route path="users/:id/edit" element={<UserEditFrom/>}/>
            <Route exact path="/users/:id/notes/:note_id" element={<NoteDetails />} />
            <Route exact path="/users/:id/notes/:note_id/edit" element={<NoteEditForm />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App

