import { useState, useEffect } from "react";
import { createBucketClient } from "@cosmicjs/sdk";
import { CosmicObject } from "../types/cosmicObj";
import { Card } from "react-bootstrap";
import "../css/tolearn.css";

export default function ToLearn() {
	const [cosmicObj, setCosmicObj] = useState<CosmicObject[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		initializeCosmic();
	}, []);
	const initializeCosmic = async () => {
		const cosmic = createBucketClient({
			bucketSlug: import.meta.env.VITE_COSMIC_BUCKET_SLUG,
			readKey: import.meta.env.VITE_COSMIC_API_KEY,
		});
		setIsLoading(true);
		try {
			const obj = await cosmic.objects
				.find({
					type: "posts",
				})
				.props([
					"title",
					"slug",
					"metadata.description",
					"metadata.tags",
					"metadata.createdat",
				]);
			if (obj && obj.objects && obj.objects.length > 0) {
				obj.objects.sort((a: any, b: any) => {
					const dateA = new Date(a.metadata.createdat).getTime();
					const dateB = new Date(b.metadata.createdat).getTime();
					return dateA - dateB;
				});
				// console.log(obj.objects);
				const mostRecentBlogs = obj.objects.slice(0, 3);
				setCosmicObj(mostRecentBlogs);
			}
		} catch (err) {
			setCosmicObj([]);
		}
		setIsLoading(false);
	};
	const renderRecentBlogs = () => {
		var blog = [];
		if (isLoading) {
			return (
				<img id="loading-recent-blog" src="static/loading.png" alt="loading" />
			);
		}
		else if (cosmicObj && cosmicObj.length === 0) {
			return <h5 className="text-center">No recent Blogs to show</h5>;
		}
		else if (cosmicObj && cosmicObj.length > 0) {
			for (var i = 0; i < cosmicObj.length; i++) {
				blog.push(
					<a
						key={cosmicObj[i].slug}
						className="recent-blog-card-link"
						id="recent-blog-card-link"
						href={`/blog/${cosmicObj[i].slug}`}
						rel="noopener noreferrer"
						target="_blank"
					>
						<Card className="recent-blog-card">
							<Card.Body className="recent-blog-card-body">
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
									<p className="m-0 w-100 mr-auto">
										{cosmicObj[i].metadata.description}
									</p>
								) : null}
							</Card.Body>
						</Card>
					</a>
				);
			}
			return blog;
		}
	};
	return (
		<section className="tolearn" id="tolearn">
			<div className="ending-container">
				<div className="to-learn-container">
					<h2 className="custom-header">I want to learn</h2>
					{/* <hr className="recent-blogs-hr" /> */}
					<p>(Future ventures)</p>
					<div className="tolearn-content">
						<ul>
							<li>Network and Security</li>
							<li>Hardware and Electronics</li>
							<li>
								Embedded Systems, Low Level Programming and IoT
							</li>
							<li>
								Distributed Systems and High Level System Design
							</li>
							<li>ML and AI</li>
							<li>File servers / personal datacenter / NAS</li>
							<li>Blender / 3D Art / Artwork and Drawing</li>
							<li>SFML, SDL, OpenGL, VulKan, GLFW</li>
							<li>Cooking Maggie in 2min</li>
						</ul>
					</div>
				</div>
				<div className="recent-blogs">
					<h2 className="custom-header">Recent blog articles</h2>
					{/* <hr className="recent-blogs-hr" /> */}
					{renderRecentBlogs()}
				</div>
			</div>
			<div className="blog-btn-wrapper pt-4 d-flex">
				<a href="/blog" rel="noopener noreferrer" target="_blank" className="read-blog-btn">
					<span className="read-blog-btn-arrow">
						<svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
					</span>
					<span className="read-blog-btn-text">Read my blog</span>
				</a>
			</div>
		</section>
	);
}
