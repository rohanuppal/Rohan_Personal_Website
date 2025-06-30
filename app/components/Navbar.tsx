'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react'; // For icons

const sections = ['home', 'experience', 'projects', 'contact'];

export default function Navbar() {
	const [active, setActive] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const isManualClick = useRef(false);
	const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

	// Scroll Spy
	useEffect(() => {
		const handleScroll = () => {
			if (isManualClick.current) return; // skip updating active if manual click

			const scrollPosition = window.scrollY + 200;

			for (const id of sections) {
				const section = document.getElementById(id);
				if (section && scrollPosition >= section.offsetTop) {
					setActive(id);
					break; // stop after first match
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Smooth scroll
	useEffect(() => {
		document.documentElement.style.scrollBehavior = 'smooth';
	}, []);

	const handleClick = () => {
		setActive(''); // clear highlight immediately
		isManualClick.current = true;

		// Clear any previous timeout
		if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

		// Re-enable scroll spy after 1000ms (longer delay)
		scrollTimeout.current = setTimeout(() => {
			isManualClick.current = false;
		}, 1000);
	};

	return (
		<motion.nav
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50"
		>
			<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<div className="text-white font-bold text-2xl"></div>

				{/* Desktop Menu */}
				<div className="hidden md:flex flex-1 justify-center space-x-16">
					{sections.map((id) => (
						<a
							key={id}
							href={id === 'home' ? '/' : `#${id}`}
							className={clsx(
								'text-gray-300 hover:text-white transition nav-link',
								active === id && 'text-white font-semibold underline'
							)}
							onClick={handleClick}
						>
							{capitalize(id)}
						</a>
					))}
				</div>

				{/* Mobile Menu Button */}
				<button
					className="text-white md:hidden"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{isOpen && (
				<div className="md:hidden px-6 pb-4">
					<div className="flex flex-col space-y-4 items-start">
						{sections.map((id) => (
							<a
								key={id}
								href={id === 'home' ? '/' : `#${id}`}
								onClick={() => {
									setIsOpen(false);
									handleClick();
								}}
								className={clsx(
									'text-gray-300 hover:text-white transition',
									active === id && 'text-white font-semibold underline'
								)}
							>
								{capitalize(id)}
							</a>
						))}
					</div>
				</div>
			)}
		</motion.nav>
	);
}

function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
