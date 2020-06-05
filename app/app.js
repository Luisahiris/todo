import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const main = React.lazy(() => import('./components/main'))
const auth = React.lazy(() => import('./components/auth'))
const todo = React.lazy(() => import('./components/todo'))

class App extends React.Component {

}

ReactDom.render(
  <App />,
  document.getElementById('app')
)