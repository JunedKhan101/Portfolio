import { TypeAnimation } from 'react-type-animation';
import "../css/intro.css";

export default function Intro() {
	return (
		<div className="intro-container" id="intro">
			<div className="intro">
				<div className="intro-text">
					<h1 className="display-large">
						<TypeAnimation
							sequence={[
								`Hi, I'm Juned Khan\nI'm a Software Engineer`,
							]}
							wrapper="div"
							speed={50}
							style={{ whiteSpace: 'pre-line', fontWeight: '600' }}
							repeat={3}
							cursor={true}
						/>
					</h1>
				</div>
			</div>
		</div>
	);
}
