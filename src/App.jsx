import React from "react"
import Pathes from "./components/Pathes/Pathes"
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Header/>
      <Pathes/>
      <Sidebar/>
      <Footer/>
    </div>
  )
}

export default App
