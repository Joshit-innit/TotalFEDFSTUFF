import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Reduxdemo from './reduxdemo'
import MateraialUiDemo from './MaterialUiDemo'
// import Childparent from './Childrenparent'
// import ParentToChild from './parentToChild'
// import reusableComponents from './reusableComponents.jsx'
//import App3 from './App3.jsx'
//import App from './App.jsx'
//import App2 from './App.jsx'

//import App3 from './App.jsx'
//import Propsdemo from './Propsdemo.jsx'
//import Stat from './Stateobjectdemo.jsx'
//import Listrender from './Listrender.jsx'
//import Timer from './Timerdemo.jsx'
//import Form from './Form.jsx'
//import Reactrouterdemo from './Reactrouterdemo.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MateraialUiDemo/>
  </StrictMode>,
)