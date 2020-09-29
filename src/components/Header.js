import React from 'react'
import logo from './../logo.svg';
import './Header.css'

export default function Header() {
  return (
       <header className="App-header">
           <img src={logo} alt="react logo" height={80}/>
          <h1>React Coin</h1>
      </header>
  )
}
