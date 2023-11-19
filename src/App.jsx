import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='Container'>
        <div className='first'>
        <h2>facebook</h2>
        <h4>Facebook helps you connect and share with the people in your life</h4>
        </div>
        <form action="" method='get'>
          <input type="text"  placeholder='Email address or phone number'/><br />
          <input type="password" name="" placeholder='password' /><br />
          <button type="submit" className='Btn'>Log in</button>
            <h5><a href="">Forgotten Password</a></h5>
            <hr />
            <button type="button" className='Btn1'>Create new Account</button><br /><br />
            <a href="">create a page</a>  for a brand or business
        </form>
       </div>
    </>
  )
}

export default App
