// This component renders the blog content in markdown and highlights the syntax of the code
import { useContext } from "react";
import { ThemeContext } from "./App";
import { CopyToClipboard } from "react-copy-to-clipboard";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../css/renderer.css";

export default function CopyButton({ content }: any) {
	const { theme } = useContext(ThemeContext) as { theme: string };

	const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
		var currentBtn = event.currentTarget;
        currentBtn.classList.add("active");
        setTimeout(() => {
            currentBtn.classList.remove("active");
        }, 3000)
	};
	return (
		<div>
			<ReactMarkdown
				children={content ? content : ""}
				components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || "");
						return !inline && match ? (
							<>
								<CopyToClipboard text={String(children[0])}>
									<button
										onClick={handleCopy}
										className="prism-copy-button"
									>
										<svg
											className="bi bi-clipboard copy-svg"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="21"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
											<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
										</svg>
										<svg
											className="bi bi-check copied-svg"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="21"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
										</svg>
									</button>
								</CopyToClipboard>
								<SyntaxHighlighter
									{...props}
									children={String(children).replace(
										/\n$/,
										""
									)}
									style={
										theme === "dark" ? oneDark : oneLight
									}
									language={match[1]}
									showLineNumbers={true}
									PreTag="div"
								/>
							</>
						) : (
							<code {...props} className={className}>
								{children}
							</code>
						);
					},
				}}
			/>
		</div>
	);
}
