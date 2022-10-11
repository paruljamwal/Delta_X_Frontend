import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddSong from '../Pages/AddSong'
import Artists from '../Pages/Artists'
import Login from '../Pages/Login'
import Register from '../Pages/Register';
import Songs from '../Pages/Songs'

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Songs/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/songs" element={<AddSong/>} />
      <Route path='/artist' element={<Artists/>} />
      <Route path='/addsong' element={<AddSong/>} />
    </Routes>
  )
}

export default AllRoutes