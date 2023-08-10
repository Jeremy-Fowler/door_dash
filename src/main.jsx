import 'bootstrap'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './assets/scss/main.scss'
import { router } from './Router.jsx'
import { configure } from 'mobx'

// TODO add this line
configure({ enforceActions: 'never' })



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)