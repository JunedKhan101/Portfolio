import { useEffect, useState, useContext, MouseEvent, lazy } from "react";
import { createBucketClient } from "@cosmicjs/sdk";
import { ThemeContext } from "./App";
const BlogCard = lazy(() => import("./BlogCard"));
import "../css/bloghomepage.css";
import { CosmicObject } from "../types/cosmicObj";

export default function BlogHomePage() {
	const [cosmicObj, setCosmicObj] = useState<CosmicObject[]>([]);
	const [cosmicFilterObj, setCosmicFilterObj] = useState<CosmicObject[]>([]);
	const [filter, setFilter] = useState<Array<string>>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { theme } = useContext(ThemeContext) as { theme: string };
	useEffect(() => {
		initializeCosmic();
	}, []);
	useEffect(() => {
		const filterObjectsByTags = () => {
			const matchingObjects : Array<Object> = [];
			
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
			const filteredObjects = filterObjectsByTags() as CosmicObject[];
			setCosmicFilterObj(filteredObjects);
		} else {
			setCosmicFilterObj([]);
		}
	}, [filter, cosmicObj]);
	const initializeCosmic = async () => {
		const cosmic = createBucketClient({
			bucketSlug: import.meta.env.VITE_COSMIC_BUCKET_SLUG,
			readKey: import.meta.env.VITE_COSMIC_API_KEY,
		});
		setIsLoading(true);
		const obj = await cosmic.objects
			.find({
				type: "posts",
			})
			.props(["title", "slug", "metadata.description", "metadata.tags"]);
		setCosmicObj(obj.objects);
		// console.log(obj.objects);
		setIsLoading(false);
	};
	const getAllUniqueTags = () => {
		const allTags = new Set();
		for (var i = 0; i < cosmicObj.length; i++) {
			cosmicObj[i].metadata.tags.forEach((tag) => {
				allTags.add(tag.title);
			});
		}
		return Array.from(allTags);
	};
	function renderBlogs() {
		if (isLoading) {
			return (
				<img id="loading-blog" src="static/loading.png" alt="loading" />
			);
		} else if (cosmicObj && cosmicObj.length === 0) {
			return <h1>No Blog content to show</h1>;
		}
		else if (cosmicObj && cosmicObj.length > 0) {
			return <BlogCard cosmicObject={cosmicFilterObj && cosmicFilterObj.length > 0 ? cosmicFilterObj : cosmicObj} />
		}
	}
	const handleFilterClick = (event : MouseEvent<HTMLButtonElement>, tag : string) => {
		const targetElement = event.target as HTMLElement;
		if (targetElement.classList.contains('active')) {
			targetElement.classList.remove('active');
			var arr = [...filter];
			var index = arr.indexOf(tag);
			if (index > -1) {
				arr.splice(index, 1);
				setFilter(arr);
			}
		}
		else {
			targetElement.classList.add('active');
			setFilter([...filter, tag]);
		}
	};
	const handleClearFilter = () => {
		setFilter([]);
	};
	const uniqueTags = getAllUniqueTags() as string[];
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
								Clear Filters
							</button>
						</div>
						<div className="filter-tags-small">
							{uniqueTags.map((tag : string, index : number) => (
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
							Clear Filters
						</button>
					</div>
					<div className="filter-tags w-100">
						{uniqueTags.map((tag : string, index : number) => (
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
