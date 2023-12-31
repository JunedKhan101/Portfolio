// This component renders the blog content in markdown and highlights the syntax of the code
import { useContext, lazy, useRef,forwardRef } from "react";
import { ThemeContext } from "./App";
import { CopyToClipboard } from "react-copy-to-clipboard";
const ClipBoardSVG = lazy(() => import("./svg/ClipBoardSVG"));
const CheckSVG = lazy(() => import("./svg/CheckSVG"));
import "../css/renderer.css";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Renderer({ content }: any) {
	// const syntaxHighlighterRef = useRef<SyntaxHighlighter>(null);
	const { theme } = useContext(ThemeContext) as { theme: string };
	const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
		var currentBtn = event.currentTarget;
        currentBtn.classList.add("active");
        setTimeout(() => {
            currentBtn.classList.remove("active");
        }, 3000);
	};
	return (
		<ReactMarkdown
			children={content ? content : ""}
			rehypePlugins={[rehypeRaw]}
			components={{
				// @ts-ignore
				code({ node, className, children, ...props }) {
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
	);
}
