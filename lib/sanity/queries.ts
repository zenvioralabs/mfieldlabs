import { defineQuery } from "groq";

// A post is public when it isn't a draft, has a slug, and its publish date has passed.
// Posts without `publishedAt` fall back to their creation date so they still appear;
// future-dated posts stay hidden until their date.
const PUBLISHED_FILTER = `
  _type == "post" &&
  !(_id in path("drafts.**")) &&
  defined(slug.current) &&
  coalesce(publishedAt, _createdAt) <= now()
`;

const PUBLISHED_AT = `"publishedAt": coalesce(publishedAt, _createdAt)`;

// 1. Featured article (latest post flagged `featured`)
export const FEATURED_POST_QUERY = defineQuery(`
  *[${PUBLISHED_FILTER} && featured == true]
  | order(coalesce(publishedAt, _createdAt) desc)[0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    ${PUBLISHED_AT},
    featured,
    "author": author->name
  }
`);

// 2. All published articles (list fields only) — feeds the recent list and the search index
export const ALL_POSTS_QUERY = defineQuery(`
  *[${PUBLISHED_FILTER}]
  | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    ${PUBLISHED_AT},
    featured
  }
`);

// 3. Get individual article
export const BLOG_DETAIL_QUERY = defineQuery(`
  *[${PUBLISHED_FILTER} && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    body,
    ${PUBLISHED_AT},
    _updatedAt,
    seo,
    faq,
    "author": author->{name, designation, bio, profileImage},
    "category": category->{title, "slug": slug.current},
    "tags": tags[]->{title, "slug": slug.current}
  }
`);

// 4. Slugs for static generation
export const POST_SLUGS_QUERY = defineQuery(`
  *[${PUBLISHED_FILTER}].slug.current
`);
