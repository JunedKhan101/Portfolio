export interface Tag {
    id: string;
    slug: string;
    title: string;
    content: string;
    bucket: string;
    created_at: string;
    modified_at: string;
    status: string;
    published_at: string;
    modified_by: string;
    created_by: string;
    type: string;
    metadata: {
        color: string;
    };
}

export interface Metadata {
	content?: string;
    description: string;
    tags: Tag[];
}

export interface CosmicObject {
    slug: string;
    title: string;
    metadata: Metadata;
}
