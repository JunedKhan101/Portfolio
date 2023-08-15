import React from "react";
import { Card } from "react-bootstrap";
import "../css/gear.css";

export default function Gear() {
	return (
		<section className="gear" id="gear">
			<div className="gear-subcontainer">
				<div className="gear-header-section">
					<h1>My Gear</h1>
					<p>Here's a list of gear that I use on a daily basis.</p>
				</div>
				<div className="gear-card">
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Hardware</Card.Title>
							<hr />
							<ul>
								<li>Dell Inspiron 15 5518 Laptop</li>
								<li>LG 24MK600M Monitor</li>
								<li>Redragon K530 Keyboard</li>
								<li>Asus ROG Strix Scope RX Keyboard</li>
								<li>Logitech MX Anywhere 3 Mouse</li>
								<li>Logitech Ergo M575 Mouse</li>
								<li>JBL Live 660NC Headphones</li>
								<li>Galaxy Buds Pro</li>
								<li>WD My Passport 2TB HDD x2</li>
								<li>Dockteck USB C Hub (5 in 1)</li>
							</ul>
						</Card.Body>
					</Card>
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Software</Card.Title>
							<hr />
							<ul>
								<li>Blender</li>
								<li>Bitwarden and KeePass</li>
								<li>IrfanView</li>
								<li>Everything</li>
                                <li>SysInternal Tools</li>
							</ul>
						</Card.Body>
					</Card>
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>For Coding</Card.Title>
							<hr />
							<ul>
								<li>VSCode</li>
								<li>Visual Studio</li>
								<li>Notepad++</li>
								<li>Sublime Text</li>
								<li>Vim/Neovim and Emacs</li>
								<li>WSL</li>
								<li>Oh My Posh for PowerShell</li>
								<li>CaskaydiaCove Nerd Font</li>
							</ul>
						</Card.Body>
					</Card>
					<Card style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Notes/Productivity</Card.Title>
							<hr />
							<ul>
								<li>Notion and OneNote</li>
								<li>TickTick</li>
							</ul>
						</Card.Body>
					</Card>
				</div>
			</div>
		</section>
	);
}
