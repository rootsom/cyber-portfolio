import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectData = [
{
  title: 'Red Team Simulation – Advanced Adversary Emulation',

  description: 'Simulated a full-scale Advanced Persistent Threat (APT) attack against a corporate-like infrastructure, replicating real-world attacker methodologies across the entire kill chain—from reconnaissance and initial access to privilege escalation, lateral movement, persistence, and data exfiltration.',

  highlights: [
    'Performed reconnaissance and attack surface mapping',
    'Exploited vulnerabilities for initial foothold',
    'Executed privilege escalation and credential dumping',
    'Conducted lateral movement across Active Directory environment',
    'Simulated persistence techniques and data exfiltration',
    'Analyzed attack paths and security weaknesses in enterprise setup'
  ],

  tools: [
    'Metasploit',
    'Empire',
    'BloodHound',
    'Mimikatz',
    'Nmap',
    'Burp Suite',
    'PowerView',
    'CrackMapExec',
    'Wireshark'
  ],

  outcome: 'Demonstrated end-to-end adversary simulation in a controlled lab environment, identifying critical security gaps and providing actionable remediation strategies aligned with real-world enterprise defense practices.'
},
	{
  title: 'Red Team Simulation – Enterprise Active Directory Compromise',

  description: 'Executed a full-scope red team engagement simulating a targeted Advanced Persistent Threat (APT) attack against a Windows-based enterprise Active Directory environment. Emulated a real-world attacker by chaining multiple attack vectors to achieve initial access, domain dominance, persistence, and controlled data exfiltration while evading basic security controls.',

  scenario: 'Assumed the role of an external attacker targeting a mid-size organization with exposed services. Gained initial foothold via vulnerable web application and misconfigured services, followed by internal reconnaissance, credential harvesting, and full domain compromise of Active Directory infrastructure.',

  highlights: [
    'Performed external reconnaissance and attack surface enumeration',
    'Exploited web vulnerabilities and misconfigurations for initial access',
    'Established command & control (C2) channel for persistence',
    'Executed privilege escalation and credential dumping (LSASS memory)',
    'Enumerated and mapped Active Directory attack paths',
    'Performed lateral movement using pass-the-hash and remote execution',
    'Escalated privileges to Domain Administrator level',
    'Simulated persistence via scheduled tasks and registry modifications',
    'Conducted controlled data exfiltration and log evasion techniques',
    'Documented full attack chain with remediation recommendations'
  ],

  tools: [
    'Metasploit',
    'Empire',
    'BloodHound',
    'Mimikatz',
    'Nmap',
    'Burp Suite',
    'PowerView',
    'CrackMapExec',
    'Wireshark',
    'Responder',
    'Impacket',
    'Netcat',
    'Gobuster',
    'Dirsearch'
  ],

  outcome: 'Successfully achieved full Active Directory compromise in a controlled lab, demonstrating real-world attack techniques and identifying critical weaknesses in authentication, privilege management, and network segmentation. Delivered a detailed report outlining exploitation steps, impact analysis, and actionable remediation strategies aligned with enterprise security standards.'
},
];

const Projects = () => {
	const [selected, setSelected] = useState(null);

	return (
		<motion.section
			className="py-16 bg-gray-900 text-white text-center"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<h2 className="text-3xl font-bold mb-8 text-green-400">Projects</h2>
			<motion.div
				className="flex justify-center gap-6 flex-wrap"
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.3,
						},
					},
				}}
			>
				{projectData.map((project, index) => (
					<motion.div
						key={index}
						onClick={() => setSelected(project)}
						className="project-card"
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<h3 className="text-xl font-semibold text-green-300">
							{project.title}
						</h3>
						<p className="text-gray-400 text-sm mt-2">
							Click to see more
						</p>
					</motion.div>
				))}
			</motion.div>

			{selected && (
				<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
					<div className="bg-gray-800 p-8 rounded-lg w-96 relative shadow-2xl">
						<button
							className="absolute top-2 right-2 text-gray-400 hover:text-white"
							onClick={() => setSelected(null)}
						>
							X
						</button>
						<h3 className="text-2xl font-bold text-green-300">
							{selected.title}
						</h3>
						<p className="text-gray-300 mt-2">{selected.description}</p>
						<ul className="mt-4 text-sm text-gray-400 list-disc list-inside">
							{selected.tools.map((tool, i) => (
								<li key={i}>{tool}</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</motion.section>
	);
};

export default Projects;
