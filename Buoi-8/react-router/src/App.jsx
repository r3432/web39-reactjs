import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PageNotFound from './pages/PageNotFound'
import Layout from './pages/Layout'

const App = () => {
  return (
    <BrowserRouter>
    {/* luu tru lich su duyet web */}

<Routes>

<Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>

  <Route path='/blog' element={<Blog/>}/>

  <Route path='*' element={<PageNotFound/>}/>
  </Route>

</Routes>



    </BrowserRouter>
  )
}

export default App
