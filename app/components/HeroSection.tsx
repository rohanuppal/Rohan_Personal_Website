'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import dynamic from 'next/dynamic';
const TypewriterClient = dynamic(() => import('./TypewriterClient'), { ssr: false });

export default function HeroSection() { 
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-24"
		>
			{/* Background */}
			<div
				className="absolute inset-0 bg-center bg-cover opacity-70"
				style={{ backgroundImage: "url('/background.jpg')" }}
				aria-hidden="true"
			/>
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
			</div>

			{/* Content */}
			<div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12">
				{/* Text section */}
				<div className="text-center md:text-left md:w-1/2 space-y-6">
					<motion.h1
						initial={{ y: 50 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-700"
					>
						Rohan Uppal
					</motion.h1>

					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<TypewriterClient/>
					</motion.div>

					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="text-lg md:text-xl text-white-500"
					>
						I’m a 4th-year Computer Engineering student at TMU, currently interning at IBM, with past experience at Deloitte and OPG, and a passion for tech, travel, and meeting people!
					</motion.p>

					{/* Social Links */}
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.75 }}
						className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4"
					>
						{/* Social Icons */}
						<div className="flex gap-8 text-gray-300 text-3xl">
							<a
								href="https://www.linkedin.com/in/rohan-uppal-756654171/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="hover:text-gray-100 transition"
							>
								<FaLinkedin />
							</a>
							<a
								href="https://github.com/rohanuppal"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="hover:text-gray-100 transition"
							>
								<FaGithub />
							</a>
							<a
								href="https://medium.com/@rohanuppal35"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Medium"
								className="hover:text-gray-100 transition"
							>
								<FaMedium />
							</a>
							<a
								href="mailto:rohan.uppal@hotmail.com"
								aria-label="Email"
								className="hover:text-gray-100 transition"
							>
								<MdEmail />
							</a>
						</div>

						{/* Separator */}
						<span className="text-gray-400 hidden sm:inline">|</span>

						{/* Resume Button */}
						<a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-sm md:text-base px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 shadow-md"
						>
							<HiOutlineDocumentText className="text-xl" />
							Resume
						</a>
					</motion.div>
				</div>

				{/* Profile image */}
				<motion.div
					initial={{ x: 50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
				>
					<img
						src="/me.jpg"
						alt="Rohan Uppal"
						className="w-64 h-64 md:w-[400px] md:h-[400px] object-cover border-4 border-blue-700 shadow-2xl"
					/>
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.8 }}
				className="absolute bottom-6 w-full flex justify-center"
			>
				<div className="animate-bounce">
					<svg
						className="w-6 h-6 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</motion.div>
		</motion.section>
	);
}
