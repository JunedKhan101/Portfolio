import "../css/tolearn.css";

export default function ToLearn() {
	return (
		<section className="tolearn" id="tolearn">
            <h2>Things I want to learn</h2>
            <p>(Future Ventures)</p>
			<div className="tolearn-content">
				<ul>
					<li>Network and Security</li>
					<li>Hardware and Electronics</li>
					<li>Embedded Systems, Low Level Programming and IoT</li>
                    <li>Distributed Systems and High Level System Design</li>
					<li>ML and AI</li>
                    <li>File servers / personal datacenter / NAS</li>
                    <li>Blender / 3D Art / Artwork and Drawing</li>
                    <li>SFML, SDL, OpenGL, VulKan, GLFW</li>
                    <li>Cooking Maggie in 2min</li>
				</ul>
			</div>
		</section>
	);
}
