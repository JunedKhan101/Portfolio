import { useEffect, useState } from "react";
import { BlogObject } from "../types/cosmicObj";
import Renderer from "./Renderer";
import { useParams } from "react-router-dom";
import { createBucketClient } from "@cosmicjs/sdk";
import { Helmet } from "react-helmet";
import "../css/blog.css";

export default function Blog() {
	var { slug } = useParams();
	const [notfound, setNotFound] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [cosmicObj, setCosmicObj] = useState<BlogObject>({
		slug: '',
		title: '',
		metadata: {
			description: '',
			seokeywords: '',
			content: '',
			tags: [],
			createdat: '',
		},
	});
	useEffect(() => {
		const getBlogPost = async () => {
			const cosmic = createBucketClient({
				bucketSlug: import.meta.env.VITE_COSMIC_BUCKET_SLUG,
				readKey: import.meta.env.VITE_COSMIC_API_KEY,
			});
			setIsLoading(true);
			try {
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
						"metadata.seokeywords",
						"metadata.tags",
						"metadata.createdat"
					]);
					// console.log(obj.object);
					setCosmicObj(obj.object);
					setIsLoading(false);
			}
			catch (err) {
				setIsLoading(false);
				setNotFound(true);
			}
		};
		getBlogPost();
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
		} else if (notfound || Object.keys(cosmicObj).length === 0) {
			return <h1>No Blog content to show</h1>;
		} else {
			var formattedCreatedAtDate;
			if (cosmicObj.metadata.createdat) {
				var date = new Date(cosmicObj.metadata.createdat);
				// Define an array of month names
				const monthNames = [
					"Jan", "Feb", "Mar", "Apr", "May", "Jun",
					"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
				];
				const day = date.getDate();
				const month = date.getMonth(); // Month is zero-based (0 = January, 1 = February, etc.)
				const year = date.getFullYear();
				formattedCreatedAtDate = `${day} ${monthNames[month]} ${year}`;
			}
			return (
				<>
					<Helmet>
						<meta charSet="utf-8" />
						<title>{cosmicObj.title}</title>
						<meta name="title" content={cosmicObj.title} />
						<meta name="description" content={cosmicObj.metadata.description} />
						<meta name="keywords" content={cosmicObj.metadata.seokeywords ? cosmicObj.metadata.seokeywords : ""} />
						<meta name="robots" content="index, follow" />
						<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
						<meta name="language" content="English" />
					</Helmet>
					<div className="blogpost-container container pt-4">
						<h1 className="blog-heading pb-4 display-1">
							{cosmicObj.title}
						</h1>
						<div className="blog-tags-container pb-2">
							<div>
								<span>Tags:</span>&nbsp;
							</div>
							{cosmicObj.metadata.tags.map(
								(tag: { title: string }, index: number) => (
									<div
										className="d-inline blog-tags"
										key={index}
									>
										<span className="tag">{tag.title}</span>
										&nbsp;
									</div>
								)
							)}
						</div>
						{formattedCreatedAtDate ?
							<div>
								<p>Posted at: {formattedCreatedAtDate}</p>
							</div>
							:
							null
						}
					</div>
				</>
			);
		}
	};
	return (
		<section className="blog container relative" id="blog">
			{renderBlogContent()}
			<Renderer content={cosmicObj.metadata.content ? cosmicObj.metadata.content : '' } />
		</section>
	);
}
