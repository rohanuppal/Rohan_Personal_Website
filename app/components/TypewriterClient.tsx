'use client';

import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

const TypewriterClient = () => {
	const [text] = useTypewriter({
		words: ['Hi there!'], 
		loop: false,
		typeSpeed: 120,
		deleteSpeed: 0,
		delaySpeed: 100000,
	});

	return (
		<h2 className="text-lg md:text-xl text-gray-300 font-bold">
			<span>{text}</span>
		</h2>
	);
};

export default TypewriterClient;
