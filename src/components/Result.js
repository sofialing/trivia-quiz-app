import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Parser from 'html-react-parser'

const Result = props => {
	const [showAnswers, setShowAnswers] = useState(false)
	const [newGame, setNewGame] = useState(false)

	// Check if user tries to access component without being redirected from quiz
	if (!props.location.state) {
		return <Redirect to='/' />
	}

	const { questions, score } = props.location.state.result
	const answers = questions.map((item, i) => (
		<li className='list-group-item' key={i}>
			<span className='d-block font-weight-bold'>{Parser(item.question)}</span>
			{item.correct ? (
				<span className='d-block'>
					Your answer: {Parser(item.user_answer)} is correct.
				</span>
			) : (
				<span className='d-block'>
					Your answer: {Parser(item.user_answer)} is incorrect. Correct answer
					is {Parser(item.correct_answer)}.
				</span>
			)}
		</li>
	))

	const toggleAnswers = () => {
		setShowAnswers(!showAnswers)
	}

	return newGame ? (
		<Redirect to='/' />
	) : (
		<section className='card'>
			<div className='card-body'>
				<h2 className='card-title'>
					Congratulations! You have completed the quiz.
				</h2>
				<h3 className='card-subtitle mb-3'>
					You got {score} out of {questions.length} questions right.
				</h3>

				<button className='btn btn-secondary mr-3' onClick={toggleAnswers}>
					Show correct answers
				</button>
				<button className='btn btn-secondary' onClick={() => setNewGame(true)}>
					Start new quiz
				</button>

				{showAnswers ? (
					<ul className='list-group list-group-flush mt-4'>{answers}</ul>
				) : (
					''
				)}
			</div>
		</section>
	)
}

export default Result
