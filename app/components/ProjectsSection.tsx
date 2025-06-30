'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'Stock Dashboard',
		description: 'This is a stock dashboard website I created using ReactJs, Tailwind CSS and is hosted with Vercel.',
		image: '/stock_dashboard.png',
		github: 'https://github.com/rohanuppal/Stock-Dashboard',
	},
	{
		id: 2,
		title: '3D-Shirt',
		description: 'This is a 3D Shirt Render website I created using ReactJs, Vite, Express (backend), Tailwind CSS and is hosted with Vercel.',
		image: '/t-shirt.png',
		github: 'https://github.com/rohanuppal/3D-Shirt-Website',
	},
	{
		id: 3,
		title: 'Machine Learning',
		description: 'Article about Machine Learning.',
		image: '/machinelearning.png',
		article: 'https://medium.com/@rohanuppal35/the-fastest-learner-machine-learning-3e190f4f36b3',
	},
	{
		id: 4,
		title: 'Computer Vision',
		description: 'Article about Computer Vision',
		image: '/computervision.png',
		article: 'https://medium.com/@rohanuppal35/computer-vision-for-security-cameras-30a460387a03',
	},
	{
		id: 5,
		title: 'Augmented Reality',
		description: 'Article about Augmented Reality',
		image: '/ar.png',
		article: 'https://medium.com/@rohanuppal35/what-you-need-to-know-about-augmented-reality-ar-8236940c318',
	},
	{
		id: 6,
		title: 'Virtual Reality',
		description: 'Article about Virtual Reality',
		image: '/vr.png',
		article: 'https://medium.com/@rohanuppal35/anything-is-possible-in-vr-aec3146b8b3c',
	},
];

export default function ProjectsSection() {
	return (
		<section
			className="min-h-screen py-12 md:py-20 px-4 max-w-7xl mx-auto bg-[#0a0f1e]"
			id="projects"
		>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
			>
				Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{projects.map((project) => {
					const link = project.github ?? project.article;

					return (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: project.id * 0.15 }}
							whileHover={{ scale: 1.03 }}
							onClick={() => {
								if (link) window.open(link, '_blank');
							}}
							className="group relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-blue-900/50 cursor-pointer"
							style={{ aspectRatio: '16 / 9', minHeight: '250px' }}
						>
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover transition-transform group-hover:scale-105"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
							<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
							<div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
								<h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
								<p className="text-white-500 mb-4">{project.description}</p>
								<div className="flex gap-4 pointer-events-auto">
									{project.github && (
										<Link
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm px-4 py-2 bg-white/10 rounded-full transition-colors"
											onClick={(e) => e.stopPropagation()}
										>
											GitHub
										</Link>
									)}
									{project.article && (
										<Link
											href={project.article}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm px-4 py-2 bg-white/10 rounded-full transition-colors"
											onClick={(e) => e.stopPropagation()}
										>
											Article
										</Link>
									)}
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
			{/* View More Buttons */}
			<div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
				<Link
					href="https://github.com/rohanuppal" // Replace with actual project portfolio link if different
					target="_blank"
					rel="noopener noreferrer"
					className="text-white text-sm px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full transition"
				>
					View More Projects
				</Link>
				<Link
					href="https://medium.com/@rohanuppal35"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white text-sm px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-full transition"
				>
					View More Articles
				</Link>
			</div>
		</section>
	);
}
