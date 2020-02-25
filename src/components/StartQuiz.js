import React from 'react';

const StartGame = props => {
	return (
		<section className='text-white text-center mb-5'>
			<h1 className='display-3 font-weight-bold'>Movie Quiz</h1>
			<p className='lead mb-5'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum
				dictum auctor. Aenean elementum rhoncus felis, et fringilla massa posuere
				sed. In hac habitasse platea dictumst. Ut semper orci nibh, in pharetra
				arcu auctor volutpat. Phasellus eget augue nisi.
			</p>
			<button className='btn btn-secondary' onClick={props.onStartQuiz}>
				Start new quiz
			</button>
		</section>
	);
};

export default StartGame;
