import { TypeAnimation } from 'react-type-animation';
import "../css/intro.css";

export default function Intro() {
	return (
		<div className="intro-container" id="intro">
			<div className="intro">
				<div className="intro-text">
					<h1 className="display-1">	
						<TypeAnimation
							sequence={[
								`Hi, I'm Juned Khan;\nI'm a Software Enginner;`,
							]}
							speed={50}
							style={{ whiteSpace: 'pre-line', fontWeight: '600' }}
							repeat={3}
						/>
					</h1>
				</div>
			</div>
		</div>
	);
}
