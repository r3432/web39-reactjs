import React from 'react'
import './asset/style.css'

import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Head from './component/head/head'
import Content from './component/main-content/content'
const App = () => {
  return (
    <>
    <Header/>
    <Head/>
    <div>
     
   <Content/>
    </div>
    <Footer/>
    </>
  )
}

export default App
