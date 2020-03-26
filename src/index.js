import './global.css'
import React from 'react'
import reactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
// import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'
const container = document.getElementById('app')
reactDOM.render(<Badges></Badges>, container)