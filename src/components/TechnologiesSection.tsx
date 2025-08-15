import React from 'react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiFirebase, SiMongodb, SiGit, SiGithub, SiVercel, SiFigma, SiTypescript, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import { SiFlutter, SiDart, SiLaravel, SiMysql, SiPostman } from 'react-icons/si';

const techStacks = [
  { name: 'Flutter', icon: <SiFlutter size={48} className="text-cyan-400" /> },
  { name: 'React', icon: <SiReact size={48} className="text-cyan-400" /> },
  { name: 'Laravel', icon: <SiLaravel size={48} className="text-cyan-400" /> },
  { name: 'Dart', icon: <SiDart size={48} className="text-cyan-400" /> },
  { name: 'Mysql', icon: <SiMysql size={48} className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={48} className="text-white" /> },

  { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} className="text-sky-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs size={48} className="text-green-500" /> },
  { name: 'Firebase', icon: <SiFirebase size={48} className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript size={48} className="text-blue-400" /> },
  { name: 'JavaScript', icon: <SiJavascript size={48} className="text-yellow-300" /> },
  { name: 'Postman', icon: <SiPostman size={48} className="text-orange-500" /> },
  { name: 'Git', icon: <SiGit size={48} className="text-red-500" /> },
  { name: 'GitHub', icon: <SiGithub size={48} className="text-white" /> },
  { name: 'Vercel', icon: <SiVercel size={48} className="text-white" /> },
];

export default function TechnologiesGrid() {
  return (
    <section className="bg-gradient-hero text-white py-16 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Technologies</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {techStacks.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2 transform hover:scale-110 transition-transform">
              {tech.icon}
              <span className="text-sm sm:text-base text-gray-300 text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
