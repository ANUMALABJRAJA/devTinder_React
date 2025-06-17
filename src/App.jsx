import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './Body'
import Login from './Login'
import Profile from './Profile'
import {Provider} from "react-redux"
import appstore from './utils/appstore'
import Feed from './Feed'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Provider store={appstore} >
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body/>}>
          <Route path="/login" element={<Login/>} />
          <Route path="/login" element={<Feed/>} />
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>

    </>
  )
}

export default App
