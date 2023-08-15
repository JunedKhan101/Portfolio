import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { createBucketClient } from "@cosmicjs/sdk";
import "../css/blog.css";

export default function Blog() {
	const [cosmicObj, setCosmicObj] = useState({});
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
	function renderBlogs() {
		if (!isLoading && cosmicObj) {
			var blog = [];
			for (var i = 0; i < cosmicObj.length; i++) {
				blog.push(
					<a
						className="blog-card-link"
						key={i}
						href={"/blog/" + cosmicObj[i].slug}
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
									<p className="m-0">{cosmicObj[i].metadata.description}</p>
								) : null}
								<div className="tag-container w-100 text-left pt-2">
									{cosmicObj[i].metadata.tags.map((val, key) => {
										const tagStyle = {
											backgroundColor: val.metadata.color,
										}
										return (
											<>
												<span key={key} className="m-0 tag" style={tagStyle}>{val.title}</span>&nbsp;
											</>
										);
									})}
								</div>
							</Card.Body>
						</Card>
					</a>
				);
			}
			return (
				<div className="blog-card-section pt-4">
					{isLoading ? (
						<img
							id="loading"
							src="static/loading.png"
							alt="loading"
						/>
					) : (
						blog
					)}
				</div>
			);
		} else {
			return <h1>No Blog content to show</h1>;
		}
	}
	return (
		<>
			<section className="blog" id="blog">
				<div className="blog-subcontainer">
					<h1>Blog</h1>
					{renderBlogs()}
				</div>
			</section>
		</>
	);
}
