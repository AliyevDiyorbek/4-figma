import React from 'react'
import Header from './compones/header'
import Navbar from './compones/navbar'
import Filter from './compones/filter'
import Row from './compones/row'
import Find from './compones/find'
import Scenes from './compones/scenes'
import Best from './compones/best'
import Easy from './compones/easy'
import Just from './compones/just'
import Another from './compones/another'
import Stay from './compones/stay'
import Clean from './compones/clean'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Filter/>
      <Row/>
      <Find/>
      <Scenes/>
      <Best/>
      <Easy/>
      <Just/>
      <Another/>
      <Stay/>
      <Clean/>
    </div>
  )
} 
