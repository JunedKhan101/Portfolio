import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { createBucketClient } from "@cosmicjs/sdk";
import "../css/blog.css";

export default function Blog() {
	var { slug } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [cosmicObj, setCosmicObj] = useState({});
	useEffect(() => {
		const getBlogPost = async () => {
			const cosmic = createBucketClient({
				bucketSlug: process.env.REACT_APP_COSMIC_BUCKET_SLUG,
				readKey: process.env.REACT_APP_COSMIC_API_KEY,
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
						<h1 className="blog-heading pb-4 display-1">{cosmicObj.title}</h1>
						<ReactMarkdown className="md-content">{cosmicObj.metadata.content}</ReactMarkdown>
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
