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
		// setExpression((prev) => prev + '=');
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
						<div className='display' id='display'>
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
							className='pad-button AC'
							id='clear'>
							AC
						</div>
						<div
							onClick={() => handleClick('/')}
							className='pad-button division operator'
							id='divide'>
							/
						</div>
						<div
							onClick={() => handleClick('*')}
							className='pad-button multiplication operator'
							id='multiply'>
							x
						</div>
						<div
							onClick={() => handleClick('7')}
							className='pad-button seven'
							id='seven'>
							7
						</div>
						<div
							onClick={() => handleClick('8')}
							className='pad-button eight'
							id='eight'>
							8
						</div>
						<div
							onClick={() => handleClick('9')}
							className='pad-button nine'
							id='nine'>
							9
						</div>
						<div
							onClick={() => handleClick('-')}
							className='pad-button minus operator'
							id='subtract'>
							-
						</div>
						<div
							onClick={() => handleClick('4')}
							className='pad-button four'
							id='four'>
							4
						</div>
						<div
							onClick={() => handleClick('5')}
							className='pad-button five'
							id='five'>
							5
						</div>
						<div
							onClick={() => handleClick('6')}
							className='pad-button six'
							id='six'>
							6
						</div>
						<div
							onClick={() => handleClick('+')}
							className='pad-button addition operator'
							id='add'>
							+
						</div>
						<div
							onClick={() => handleClick('1')}
							className='pad-button one'
							id='one'>
							1
						</div>
						<div
							onClick={() => handleClick('2')}
							className='pad-button two'
							id='two'>
							2
						</div>
						<div
							onClick={() => handleClick('3')}
							className='pad-button three'
							id='three'>
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
							className='pad-button zero'
							id='zero'>
							0
						</div>
						<div
							onClick={() => handleClick('.')}
							className='pad-button dot'
							id='decimal'>
							.
						</div>
					</div>
				</div>
			</div>
			<footer
				style={{
					textAlign: 'center',
					fontFamily: 'Share Tech Mono',
					color: 'rgb(172, 57, 57)',
				}}>
				by twisam
			</footer>
		</div>
	);
};

export default App;
