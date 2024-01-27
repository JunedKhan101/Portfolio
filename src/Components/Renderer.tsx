// This component renders the blog content in markdown and highlights the syntax of the code
import { useContext, lazy } from "react";
import { ThemeContext } from "./App";
import { CopyToClipboard } from "react-copy-to-clipboard";
const ClipBoardSVG = lazy(() => import("./svg/ClipBoardSVG"));
const CheckSVG = lazy(() => import("./svg/CheckSVG"));
import "../css/renderer.css";

import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Renderer({ content }: { content: string }) {
	const { theme } = useContext(ThemeContext) as { theme: string };
	const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
		var currentBtn = event.currentTarget;
		currentBtn.classList.add("active");
		setTimeout(() => {
			currentBtn.classList.remove("active");
		}, 3000);
	};
	return (
		<Markdown
			children={content ? content : ""}
			rehypePlugins={[rehypeRaw]}
			components={{
				code(props) {
					const { children, className, node, ...rest } = props;
					const match = /language-(\w+)/.exec(className || "");
					return match ? (
						<>
							<CopyToClipboard text={String(children)}>
								<button
									onClick={handleCopy}
									className="prism-copy-button"
								>
									<ClipBoardSVG />
									<CheckSVG />
								</button>
							</CopyToClipboard>
							<SyntaxHighlighter
								children={String(children).replace(/\n$/, "")}
								style={theme === "dark" ? oneDark : oneLight}
								language={match[1]}
								showLineNumbers={true}
								PreTag="div"
							/>
						</>
					) : (
						<code {...rest} className={className}>
							{children}
						</code>
					);
				},
			}}
		/>
	);
}
