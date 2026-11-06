export interface SanityImage {
  _type?: string;
  _key?: string;
  asset?: { _ref?: string; _id?: string; _type?: string };
  alt?: string;
  caption?: string;
  hotspot?: unknown;
  crop?: unknown;
}

export interface PortableTextSpan {
  _type: "span";
  _key: string;
  text: string;
  marks?: string[];
}

export interface PortableTextMarkDef {
  _type: string;
  _key: string;
  href?: string;
  blank?: boolean;
  [key: string]: unknown;
}

export type PortableTextChild = PortableTextSpan | ({ _type: string; _key: string } & Record<string, unknown>);

export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style?: string;
  listItem?: string;
  level?: number;
  children: PortableTextChild[];
  markDefs?: PortableTextMarkDef[];
}

export type PortableTextNode = PortableTextBlock | ({ _type: string; _key: string } & Record<string, unknown>);

export interface PostListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImage?: SanityImage | null;
  publishedAt: string;
  featured?: boolean | null;
}

export interface PostAuthor {
  name?: string | null;
  designation?: string | null;
  bio?: unknown;
  profileImage?: SanityImage | null;
}

export interface PostSeo {
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImage?: SanityImage | null;
  noIndex?: boolean | null;
  canonicalUrl?: string | null;
}

export interface PostFaqItem {
  _key?: string;
  question?: string | null;
  answer?: string | PortableTextNode[] | null;
}

export interface PostDetail extends PostListItem {
  _updatedAt?: string;
  body?: PortableTextNode[] | null;
  seo?: PostSeo | null;
  faq?: PostFaqItem[] | null;
  author?: PostAuthor | null;
  category?: { title?: string; slug?: string } | null;
  tags?: Array<{ title?: string; slug?: string }> | null;
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}
