import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { createBucketClient } from "@cosmicjs/sdk";
import "../css/bloghomepage.css";

export default function BlogHomePage() {
	const [cosmicObj, setCosmicObj] = useState({});
	const [filter, setFilter] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		initializeCosmic();
		setIsLoading(false);
	}, []);
	const initializeCosmic = async () => {
		const cosmic = createBucketClient({
			bucketSlug: process.env.REACT_APP_COSMIC_BUCKET_SLUG,
			readKey: process.env.REACT_APP_COSMIC_API_KEY,
		});
		const obj = await cosmic.objects
			.find({
				type: "posts",
			})
			.props(["title", "slug", "metadata.description", "metadata.tags"]);
		setCosmicObj(obj.objects);
		console.log(obj);
	};
	const getAllUniqueTags = () => {
		const allTags = new Set(); // Use a Set to store unique tags
		for (var i = 0; i < cosmicObj.length; i++) {
			cosmicObj[i].metadata.tags.forEach((tag) => {
				allTags.add(tag.title);
			});
		}
		return Array.from(allTags); // Convert the Set back to an array
	};
	function renderBlogs() {
		if (isLoading) {
			return (
				<img id="loading-blog" src="static/loading.png" alt="loading" />
			);
		} else if (cosmicObj && !isLoading) {
			var blog = [];
			for (var i = 0; i < cosmicObj.length; i++) {
				blog.push(
					<a
						key={cosmicObj[i].slug}
						className="blog-card-link"
						href={`/blog/${cosmicObj[i].slug}`}
					>
						<Card style={{ width: "18rem" }}>
							<Card.Body className="blog-card-body">
								<Card.Title
									className={
										cosmicObj[i].metadata.description
											? "pb-2 w-100"
											: "m-0"
									}
								>
									{cosmicObj[i].title}
								</Card.Title>
								{cosmicObj[i].metadata.description ? (
									<p className="m-0">
										{cosmicObj[i].metadata.description}
									</p>
								) : null}
								<div className="tags-container pt-2 w-100">
									<p className="tags-text m-0">tags:&nbsp;</p>
									<div className="tags">
										{cosmicObj[i].metadata.tags.map(
											(val, key) => {
												// const tagStyle = {
												// 	backgroundColor:
												// 		val.metadata.color,
												// };
												return (
													<>
														<p
															key={key}
															className="m-0 tag"
															// style={tagStyle}
														>
															{val.title}
														</p>
														&nbsp;
													</>
												);
											}
										)}
									</div>
								</div>
							</Card.Body>
						</Card>
					</a>
				);
			}
			return <div className="blog-card-section pt-4">{blog}</div>;
		} else {
			return <h1>No Blog content to show</h1>;
		}
	}
	const handleFilterClick = (tag) => {
		setFilter(tag);
	};
	const uniqueTags = getAllUniqueTags();
	return (
		<>
			<section className="blog-homepage" id="blog-homepage">
				<div className="blog-homepage-subcontainer">
					<h1>Blog</h1>
					<p className="w-100 text-center">
						Writing on software development, system design, and in
						general tech.
					</p>
					<div className={!isLoading && cosmicObj ? 'filter-tags-container-small' : 'd-none'}>
						<p className="w-100 text-left">Filter by tags:</p>
						<div className="filter-tags-small">
							{uniqueTags.map((tag, index) => (
								<button
									className={
										filter
											? "border-0 tag-filter-btn"
											: "tag-filter-btn border-0"
										}
									onClick={() => handleFilterClick(tag)}
									>
									{tag}
								</button>
							))}
						</div>
					</div>
					{renderBlogs()}
				</div>
				<div className={!isLoading && cosmicObj ? 'filter-tags-container' : 'd-none'}>
					<p className="w-100 text-left">Filter by tags:</p>
					<div className="filter-tags">
						{uniqueTags.map((tag, index) => (
							<button
								key={index}
								className={
									filter
										? "border-0 tag-filter-btn"
										: "tag-filter-btn border-0"
								}
								onClick={() => handleFilterClick(tag)}
							>
								{tag}
							</button>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
