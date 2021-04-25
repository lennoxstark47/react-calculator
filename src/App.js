import React, { useState } from 'react';
import './App.css';
const App = () => {
	const [answer, setAnswer] = useState('');
	const [expression, setExpression] = useState(
		''
	);
	const handleClick = (symbol) => {
		setExpression((prev) => prev + symbol);
	};

	const handleCalculation = () => {
		setAnswer(eval(expression));
		setExpression((prev) => prev + '=');
	};

	const handleAllClear = () => {
		setExpression('');
		setAnswer(0);
	};

	return (
		<div className='main'>
			<div className='container'>
				<div className='wrapper'>
					<div className='grid'>
						<div className='display'>
							<input
								type='text'
								value={expression}
								placeholder='0'
								disabled></input>
							<div className='total'>
								<strong>{answer}</strong>
							</div>
						</div>
						<div
							onClick={handleAllClear}
							className='pad-button AC'>
							AC
						</div>
						<div
							onClick={() => handleClick('/')}
							className='pad-button division operator'>
							/
						</div>
						<div
							onClick={() => handleClick('*')}
							className='pad-button multiplication operator'>
							x
						</div>
						<div
							onClick={() => handleClick('7')}
							className='pad-button seven'>
							7
						</div>
						<div
							onClick={() => handleClick('8')}
							className='pad-button eight'>
							8
						</div>
						<div
							onClick={() => handleClick('9')}
							className='pad-button nine'>
							9
						</div>
						<div
							onClick={() => handleClick('-')}
							className='pad-button minus operator'>
							-
						</div>
						<div
							onClick={() => handleClick('4')}
							className='pad-button four'>
							4
						</div>
						<div
							onClick={() => handleClick('5')}
							className='pad-button five'>
							5
						</div>
						<div
							onClick={() => handleClick('6')}
							className='pad-button six'>
							6
						</div>
						<div
							onClick={() => handleClick('+')}
							className='pad-button addition operator'>
							+
						</div>
						<div
							onClick={() => handleClick('1')}
							className='pad-button one'>
							1
						</div>
						<div
							onClick={() => handleClick('2')}
							className='pad-button two'>
							2
						</div>
						<div
							onClick={() => handleClick('3')}
							className='pad-button three'>
							3
						</div>
						<div
							onClick={handleCalculation}
							className='pad-button equal'
							id='equals'>
							{' '}
							={' '}
						</div>
						<div
							onClick={() => handleClick('0')}
							className='pad-button zero'>
							0
						</div>
						<div
							onClick={() => handleClick('.')}
							className='pad-button dot'>
							.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
