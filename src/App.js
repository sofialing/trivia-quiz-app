import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'
import Result from './components/Result'

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={StartQuiz}></Route>
					<Route path='/quiz' component={Quiz}></Route>
					<Route path='/result' component={Result}></Route>
					<Redirect to='/' />
				</Switch>
			</Router>
		)
	}
}

export default App
