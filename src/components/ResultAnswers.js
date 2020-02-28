import React from 'react'
import Parser from 'html-react-parser'

const ResultAnswers = props => {
	const { showAnswers, questions } = props
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

	return showAnswers ? (
		<ul className='list-group list-group-flush mt-4'>{answers}</ul>
	) : (
		''
	)
}

export { ResultAnswers }
