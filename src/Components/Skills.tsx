import { useContext } from "react";
import { ThemeContext } from "./App";
import "../css/skills.css";

export default function Skills() {
	const { theme } = useContext(ThemeContext) as { theme: string };
	return (
		<section className="skills-container" id="skills">
			<div className="skills-subcontainer">
				<div className="skills-card-container">
					<div className="skills">
						<h2 className="toolbox-heading custom-header">
							My Toolbox
						</h2>
						<div className="icons">
							<img alt="javascript" src="https://skillicons.dev/icons?i=js" />
							<img alt="typescript" src="https://skillicons.dev/icons?i=ts" />
							<img alt="jquery" src="https://skillicons.dev/icons?i=jquery" />
							<img alt="react" src="https://skillicons.dev/icons?i=react" />
							<img alt="nodejs" src="https://skillicons.dev/icons?i=nodejs" />
							<img alt="nextjs" src="https://skillicons.dev/icons?i=next" />
							<img alt="python" src="https://skillicons.dev/icons?i=python" />
							<img alt="django" src="https://skillicons.dev/icons?i=django" />
							<img alt="c" src="https://skillicons.dev/icons?i=c" />
							<img alt="cpp" src="https://skillicons.dev/icons?i=cpp" />
							<img alt="java" src="https://skillicons.dev/icons?i=java" />
							<img alt="csharp" src="https://skillicons.dev/icons?i=cs" />
							<img alt="mysql" src="https://skillicons.dev/icons?i=mysql" />
							<img alt="mongodb" src="https://skillicons.dev/icons?i=mongodb" />
							<img alt="postgresSQL" src="https://skillicons.dev/icons?i=postgresql" />
							<img alt="git" src="https://skillicons.dev/icons?i=git" />
							<img alt="bootstrap" src="https://skillicons.dev/icons?i=bootstrap" />
							<img alt="tailwind" src="https://skillicons.dev/icons?i=tailwind" />
							<img alt="sass" src="https://skillicons.dev/icons?i=sass" />
							<img alt="css" src="https://skillicons.dev/icons?i=css" />
							<img alt="docker" src="https://skillicons.dev/icons?i=docker" />
						</div>
						<div className="github-container">
							<h2 className="pt-4 github-stats-heading custom-header">GitHub Stats</h2>
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
