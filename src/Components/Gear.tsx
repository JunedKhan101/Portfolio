import { Card } from "react-bootstrap";
import "../css/gear.css";

export default function Gear() {
	return (
		<section className="gear" id="gear">
			<div className="gear-subcontainer">
				<div className="gear-header-section">
					<h1 className="custom-header">My Gear</h1>
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
								<li>Redragon K530</li>
								<li>Asus ROG Strix Scope RX</li>
								<li>Logitech MX Anywhere 3</li>
								<li>Logitech Ergo M575</li>
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
                                <li><a className="link" href="https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite" rel="noreferrer" target="_blank">Sysinternal Tools</a></li>
								<li><a className="link" href="https://learn.microsoft.com/en-us/windows/powertoys/" rel="noreferrer" target="_blank">Microsoft PowerToys</a></li>
								<li>Everything</li>
								<li>IrfanView</li>
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
								<li>Notion</li>
								<li>OneNote</li>
								<li>TickTick</li>
							</ul>
						</Card.Body>
					</Card>
				</div>
			</div>
		</section>
	);
}
