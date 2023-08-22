import React from "react";
import { Card } from "react-bootstrap";

type Props = {
	cosmicObject: Array<any>
}

export default function BlogCard({cosmicObject} : Props) {
	var blog = [];
	for (var i = 0; i < cosmicObject.length; i++) {
		blog.push(
			<a
				key={cosmicObject[i].slug}
				className="blog-card-link"
				href={`/blog/${cosmicObject[i].slug}`}
			>
				<Card style={{ width: "18rem" }}>
					<Card.Body className="blog-card-body">
						<Card.Title
							className={
								cosmicObject[i].metadata.description
									? "pb-2 w-100"
									: "m-0"
							}
						>
							{cosmicObject[i].title}
						</Card.Title>
						{cosmicObject[i].metadata.description ? (
							<p className="m-0">
								{cosmicObject[i].metadata.description}
							</p>
						) : null}
						<div className="tags-container pt-2 w-100">
							<p className="tags-text m-0">tags:&nbsp;</p>
							<div className="tags">
								{cosmicObject[i].metadata.tags.map(
									(val : string, key : number) => {
										// const tagStyle = {
										// 	backgroundColor:
										// 		val.metadata.color,
										// };
										return (
											<div key={key}>
												<p
													key={key}
													className="m-0 tag"
													// style={tagStyle}
												>
													{val.title}
												</p>
												&nbsp;
											</div>
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
	return (<div className="blog-card-section pt-4 pb-4">{blog}</div>);
}
