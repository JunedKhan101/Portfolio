import { useTheme } from "../context/ThemeContext";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../css/skills.css";

export default function Skills() {
	const { theme } = useTheme();
	const skills = [
		"javascript",
		"typescript",
		"jquery",
		"react",
		"nodejs",
		"next",
		"python",
		"django",
		"c",
		"cpp",
		"java",
		"cs",
		"mysql",
		"mongodb",
		"postgresql",
		"git",
		"bootstrap",
		"tailwind",
		"sass",
		"css",
		"docker",
	];
	const renderTooltip = (text: string) => <Tooltip>{text}</Tooltip>;
	const renderIcons = (skills: Array<string>) => {
		return (
			<div className="icons">
				{skills.map((skill) => (
					<OverlayTrigger
						key={skill}
						placement="top"
						overlay={renderTooltip(skill)}
					>
						<img
							alt={skill}
							src={`https://skillicons.dev/icons?i=${skill}`}
						/>
					</OverlayTrigger>
				))}
			</div>
		);
	};
	return (
		<section className="skills-container" id="skills">
			<div className="skills-subcontainer">
				<div className="skills-card-container">
					<div className="skills">
						<h2 className="toolbox-heading custom-header">
							My Toolbox
						</h2>
						{renderIcons(skills)}
						<div className="github-container">
							<h2 className="pt-4 github-stats-heading custom-header">
								GitHub Stats
							</h2>
							<div className="github-stats-wrapper">
								<img
									height="170rem"
									src={`https://github-readme-stats.vercel.app/api?username=JunedKhan101&show_icons=false&hide_border=true&count_private=true&show_icons=true&theme=${
										theme === "dark"
											? "midnight-purple"
											: "buefy"
									}`}
								/>
								<img
									height="170rem"
									src={`https://github-readme-stats.vercel.app/api/top-langs/?username=JunedKhan101&hide=html,Jupyter%20Notebook&show_icons=true&hide_border=true&layout=compact&exclude_repo=Vim-configs&langs_count=6&theme=${
										theme === "dark"
											? "midnight-purple"
											: "buefy"
									}`}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
