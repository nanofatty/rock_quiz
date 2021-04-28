// Main application, Questions are created using functions, and using useState the Questions Progresses 



import RockClass from "./Components/rock_classification.json";
import React, { useState, useEffect } from 'react';
import Button from "./Components/Button";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Question from "./Components/Question.js";
import Modal from "./Components/Modal";

const BUTTON_WRAPPER_STYLES = {
	position: 'relative',
	zIndex: 1
  }
  
  const OTHER_CONTENT_STYLES = {
	position: 'relative',
	zIndex: 2,
	backgroundColor: 'red',
	padding: '10px'
  }



export default function App() {
	const rocks = RockClass.rockclass; 
	// randomizes any array and none of the values in it repeat
	function randomize(array) 
	{ for (let i = array.length - 1; i > 0; i--) 
		{ const j = Math.floor(Math.random() * (i + 1)); 
			[array[i], array[j]] = [array[j], array[i]]; } 
		
		return array};

	const sedimentaryRocks = rocks.filter(rock => 
		rock.category === 'Sedimentary');
	const igneousRocks = rocks.filter(rock => 
		rock.category === 'Igneous');
	const metamorphicRocks = rocks.filter(rock => 
		rock.category === 'Metamorphic');	
	const answerOption1 = ['texture', 'arrrangment', 'crystalline_clast', 'mineral','prominent_composition']		
// Couple of testings for the functions I have written, these won't show up in the final result
// but they do in the console
	const randSedimentary = randomize(sedimentaryRocks);
	const randIgneous = randomize(igneousRocks);
	const randMetamorphic = randomize(metamorphicRocks)

	// let firstQuestion = []
	// let secondQuestion=[]
	// let thirdQuestion=[]
	// const [questions, setQuestions]= useState([])	

	const firstQuestion = Question(randIgneous)
	const secondQuestion = Question(randSedimentary)
	const thirdQuestion = Question(randMetamorphic)
	const questions = [] 
	questions.push(firstQuestion[0], 
		secondQuestion[1], 
		firstQuestion[3], 
		thirdQuestion[0], 
		firstQuestion[1], 
		firstQuestion[2], 
		firstQuestion[1], 
		firstQuestion[2], 
		secondQuestion[0], 
		thirdQuestion[1]);


// setQuestions(firstQuestion)
// console.log(secondQuestion)
	// useEffect(() => {

	// 	firstQuestion = Question(randIgneous)
	// 	secondQuestion = Question(randIgneous)
	// 	thirdQuestion = Question(randIgneous)
	// setQuestions(firstQuestion[0], firstQuestion[1])
	// }, []);
	// console.log(questions)

	
	// Essentially the heart of the Quiz
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOption.map((answerOption, i) => (
							<button key = {i} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
								{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}