import React from 'react';

const Result = props => {
	return (
		<section className='text-white text-center mb-5'>
			<h1 className='display-3 font-weight-bold'>Quiz completed</h1>
			<p className='lead mb-5'>
				Your score: {props.score} / {props.number}
			</p>
			<button className='btn btn-secondary' onClick={props.onStartNewQuiz}>
				Start new quiz
			</button>
		</section>
	);
};

export default Result;
