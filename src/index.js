// const element = document.createElement('h1')
// element.innerText = 'javascript nativo!'

// const container = document.getElementById('app')
// container.appendChild(element)
import './global.css'
import React from 'react'
import reactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Badge from './components/Badge'
const container = document.getElementById('app')
reactDOM.render(<Badge></Badge>, container)