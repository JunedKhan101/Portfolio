import React, { useEffect, useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { createBucketClient } from "@cosmicjs/sdk";
import { ThemeContext } from "../components/App";
import "../css/bloghomepage.css";

export default function BlogHomePage() {
	const [cosmicObj, setCosmicObj] = useState({});
	const [cosmicFilterObj, setCosmicFilterObj] = useState({});
	const [filter, setFilter] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { theme } = useContext(ThemeContext);
	useEffect(() => {
		setIsLoading(true);
		initializeCosmic();
		setIsLoading(false);
	}, []);
	useEffect(() => {
		const filterObjectsByTags = () => {
			const matchingObjects = [];
	
			cosmicObj.forEach((item) => {
				const tags = item.metadata.tags;
				const tagTitles = tags.map((tag) => tag.title);
				if (filter.some((tagToMatch) => tagTitles.includes(tagToMatch))) {
					matchingObjects.push(item);
				}
			});
			return matchingObjects;
		};
		if (filter.length > 0) {
			const filteredObjects = filterObjectsByTags();
			setCosmicFilterObj(filteredObjects);
		} else {
			setCosmicFilterObj({});
		}
	}, [filter, cosmicObj]);
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
		} else if (cosmicFilterObj.length > 0 && !isLoading) {
			var blog = [];
			for (var i = 0; i < cosmicFilterObj.length; i++) {
				blog.push(
					<a
						key={cosmicFilterObj[i].slug}
						className="blog-card-link"
						href={`/blog/${cosmicFilterObj[i].slug}`}
					>
						<Card style={{ width: "18rem" }}>
							<Card.Body className="blog-card-body">
								<Card.Title
									className={
										cosmicFilterObj[i].metadata.description
											? "pb-2 w-100"
											: "m-0"
									}
								>
									{cosmicFilterObj[i].title}
								</Card.Title>
								{cosmicFilterObj[i].metadata.description ? (
									<p className="m-0">
										{
											cosmicFilterObj[i].metadata
												.description
										}
									</p>
								) : null}
								<div className="tags-container pt-2 w-100">
									<p className="tags-text m-0">tags:&nbsp;</p>
									<div className="tags">
										{cosmicFilterObj[i].metadata.tags.map(
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
		} else if (cosmicObj.length > 0 && !isLoading) {
			let blog = [];
			for (let i = 0; i < cosmicObj.length; i++) {
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
	const handleFilterClick = (event, tag) => {
		if (event.target.classList.contains('active')) {
			event.target.classList.remove('active');
			var arr = [...filter];
			var index = arr.indexOf(tag);
			if (index > -1) {
				arr.splice(index, 1);
				setFilter(arr);
			}
		}
		else {
			event.target.classList.add('active');
			setFilter([...filter, tag]);
		}
	};
	const handleClearFilter = () => {
		setFilter([]);
	};
	const uniqueTags = getAllUniqueTags();
	return (
		<>
			<section className="blog-homepage" id="blog-homepage">
				<div className="blog-homepage-subcontainer">
					<h1>Blog</h1>
					<p className="blog-intro-text text-center">
						Writing on software development, system design, and in
						general tech.
					</p>
					<div
						className={
							!isLoading && cosmicObj
								? "filter-tags-container-small"
								: "d-none"
						}
					>
						<p className="w-100 text-center">Filter by tags:</p>
						<div
							className={
								filter.length > 0
									? "clear-filter-btn-container-small w-100 pb-4"
									: "d-none"
							}
						>
							<button
								className={
									theme === "dark"
										? "btn btn-secondary clear-filter-btn-small"
										: "btn btn-dark clear-filter-btn-small"
								}
								onClick={() => handleClearFilter()}
							>
								X Clear Filter
							</button>
						</div>
						<div className="filter-tags-small">
							{uniqueTags.map((tag, index) => (
								<button
									key={index}
									className={
										filter.includes(tag)
											? "border-0 tag-filter-btn active"
											: "tag-filter-btn border-0 "
									}
									onClick={(event) => handleFilterClick(event, tag)}
								>
									{tag}
								</button>
							))}
						</div>
					</div>
					{renderBlogs()}
				</div>
				<div
					className={
						!isLoading && cosmicObj.length > 0
							? "filter-tags-container"
							: "d-none"
					}
				>
					<p className="w-100 text-left">Filter by tags:</p>
					<div
						className={
							filter.length > 0
								? "clear-filter-btn-container w-100 pb-4"
								: "d-none"
						}
					>
						<button
							className={
								theme === "dark"
									? "btn btn-secondary clear-filter-btn"
									: "btn btn-dark clear-filter-btn"
							}
							onClick={() => handleClearFilter()}
						>
							X Clear Filter
						</button>
					</div>
					<div className="filter-tags">
						{uniqueTags.map((tag, index) => (
							<button
								key={index}
								className={
									filter.includes(tag)
										? "border-0 tag-filter-btn active"
										: "tag-filter-btn border-0"
								}
								onClick={(event) => handleFilterClick(event, tag)}
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
