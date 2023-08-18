import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { createBucketClient } from "@cosmicjs/sdk";
import { ThemeContext } from "../components/App";
import "../css/blog.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
						{/* <ReactMarkdown className="md-content">
							{cosmicObj.metadata.content}
						</ReactMarkdown>
						<SyntaxHighlighter
							language="javascript"
							style={dracula}
						>
							{"(num) => num + 1"}
						</SyntaxHighlighter> */}
						<div className="blog-tags-container pb-2">
							<div><span>Tags:</span>&nbsp;</div>
							{cosmicObj.metadata.tags.map((tag, index) => (
								<div className="d-inline blog-tags" key={index}>
									<span
										className="tag"
									>
										{tag.title}
									</span>
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
											style={theme == "dark" ? vscDarkPlus : vs}
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
		</section>
	);
}
