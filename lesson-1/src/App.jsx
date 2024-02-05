import React, { Component } from 'react'
import './App.css'
import Cards from './components/cards/Cards'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'



export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
         <Cards/>
        
        <Footer/>
        
      </div>
    )
  }
}
