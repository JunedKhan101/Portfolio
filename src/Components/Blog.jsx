import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CopyToClipboard from "react-copy-to-clipboard";
import { createBucketClient } from "@cosmicjs/sdk";
import { ThemeContext } from "./App";
import "../css/blog.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Blog() {
	var { slug } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [cosmicObj, setCosmicObj] = useState({});
	const { theme } = useContext(ThemeContext);
	useEffect(() => {
		const getBlogPost = async () => {
			const cosmic = createBucketClient({
				bucketSlug: import.meta.env.VITE_COSMIC_BUCKET_SLUG,
				readKey: import.meta.env.VITE_COSMIC_API_KEY,
			});

			var obj = await cosmic.objects
				.findOne({
					type: "posts",
					slug: slug,
				})
				.props([
					"slug",
					"title",
					"metadata.content",
					"metadata.description",
					"metadata.tags",
				]);
			console.log(obj.object);
			setCosmicObj(obj.object);
		};
		setIsLoading(true);
		getBlogPost();
		setIsLoading(false);
	}, [slug]);
	function createCopyButton(codeEl) {
		const button = document.createElement("button");
		button.classList.add("prism-copy-button");
		var svgs =
			"<svg class='copy-svg' xmlns='http://www.w3.org/2000/svg' width='16' height='21' fill='currentColor' class='bi bi-clipboard' viewBox='0 0 16 16'><path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z'/><path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z'/></svg><svg class='copied-svg' xmlns='http://www.w3.org/2000/svg' width='16' height='21' fill='currentColor' class='bi bi-check2' viewBox='0 0 16 16'><path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'/></svg>";
		button.insertAdjacentHTML("beforeend", svgs);

		button.addEventListener("click", () => {
			if (!button.classList.contains("active")) {
				button.classList.add("active");
				let copysvg = button.querySelector(".copy-svg");
				let copiedsvg = button.querySelector(".copied-svg");
				copiedsvg.style.display = "block";
				copysvg.style.display = "none";

				navigator.clipboard.writeText(codeEl.textContent || "");
				button.disabled = true;

				setTimeout(() => {
					button.classList.remove("active");
					button.disabled = false;
					copiedsvg.style.display = "none";
					copysvg.style.display = "block";
				}, 3000);
			}
		});

		return button;
	}
	function addCopyButton() {
		const allPres = document.querySelectorAll("pre");
		for (const pre of allPres) {
			if (pre && !pre.querySelector('.prism-copy-button')) {
				const code = pre.firstElementChild;
				var btn = createCopyButton(code);
				pre.appendChild(btn);
			} 
		}
	}
	const renderBlogContent = () => {
		if (isLoading) {
			return (
				<img
					id="loading-blogpost"
					src="/static/loading.png"
					alt="loading"
				/>
			);
		} else if (!isLoading && cosmicObj && cosmicObj.metadata) {
			return (
				<>
					<div className="blogpost-container container pt-4">
						<h1 className="blog-heading pb-4 display-1">
							{cosmicObj.title}
						</h1>
						<div className="blog-tags-container pb-2">
							<div>
								<span>Tags:</span>&nbsp;
							</div>
							{cosmicObj.metadata.tags.map((tag, index) => (
								<div className="d-inline blog-tags" key={index}>
									<span className="tag">{tag.title}</span>
									&nbsp;
								</div>
							))}
						</div>
						<ReactMarkdown
							children={cosmicObj.metadata.content}
							components={{
								code({
									node,
									inline,
									className,
									children,
									...props
								}) {
									const match = /language-(\w+)/.exec(
										className || ""
									);
									return !inline && match ? (
										<SyntaxHighlighter
											{...props}
											children={String(children).replace(
												/\n$/,
												""
											)}
											style={
												theme == "dark"
													? oneDark
													: oneLight
											}
											language={match[1]}
											PreTag="div"
										/>
									) : (
										<code {...props} className={className}>
											{children}
										</code>
									);
								},
							}}
						/>
					</div>
				</>
			);
		}
	};
	return (
		<section className="blog container" id="blog">
			{renderBlogContent()}
			{addCopyButton()}
		</section>
	);
}
