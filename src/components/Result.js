import React, { useState } from 'react';
import Parser from 'html-react-parser';

const Result = props => {
	const [showAnswers, setShowAnswers] = useState(false);
	const answers = props.questions.map(item => (
		<li className='list-group-item'>
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
	));

	const toggleAnswers = () => {
		setShowAnswers(!showAnswers);
	};
	return (
		<section className='card'>
			<div className='card-body'>
				<h2 className='card-title'>
					Congratulations! You have completed the quiz.
				</h2>
				<h3 className='card-subtitle mb-3'>
					You got {props.score} out of {props.number} questions right.
				</h3>

				<button className='btn btn-secondary mr-3' onClick={toggleAnswers}>
					Show correct answers
				</button>
				<button className='btn btn-secondary' onClick={props.onResetQuiz}>
					Start new quiz
				</button>
				{showAnswers ? (
					<ul className='list-group list-group-flush mt-4'>{answers}</ul>
				) : (
					''
				)}
			</div>
		</section>
		// <section className='text-white text-center mb-5 container'>
		// 	<h1 className='display-3 font-weight-bold'>Quiz completed</h1>
		// 	<p className='lead mb-5'>
		// 		Your score: {props.score} / {props.number}
		// 	</p>
		// 	<ul className='text-left'>{correctAnswers}</ul>

		// 	<button className='btn btn-secondary' onClick={props.onResetQuiz}>
		// 		Start new quiz
		// 	</button>
		// </section>
	);
};

export default Result;
