'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white scroll-smooth">
			<Navbar />

			{/* Home Section */}
			<section id="home" className="min-h-screen scroll-mt-20 flex">
				<div className="flex-grow flex flex-col justify-center">
					<HeroSection />
				</div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="min-h-screen scroll-mt-20 flex">
				<div className="flex-grow flex flex-col justify-center">
					<ExperienceSection />
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="min-h-screen scroll-mt-20 flex bg-[#0a0f1e]">
				<div className="flex-grow flex flex-col justify-center">
					<ProjectsSection />
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-12 scroll-mt-20 flex">
				<div className="flex-grow flex flex-col justify-center">
					<ContactSection />
				</div>
			</section>

			{/* Footer */}
			<footer className="text-center py-6 text-gray-400 text-sm">
				© 2025. All rights reserved by Rohan Uppal
			</footer>
		</div>
	);
}
