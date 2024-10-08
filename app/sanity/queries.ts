import groq from "groq";

export const SANITY_IMAGE_OBJECT_STUB_ASSET = groq`
  _id,
  _type,
  extension,
  url,
  metadata {
    lqip,
    blurHash,
    dimensions {
      width,
      height,
      aspectRatio
    }
  },
`;
const SANITY_IMAGE_OBJECT_STUB = groq`
  _type,
  alt,
  asset->{${SANITY_IMAGE_OBJECT_STUB_ASSET}}`;

export const SITE_META_QUERY = groq`*[_type == "siteMeta"][0]{
  author,
  bio,
  description,
  siteUrl,
  title,
  email,
  phone
}`;

export const CONTENT_OBJECT_STUB = groq`
  ...,
  _type == "block" => {
    ...,
    markDefs[]{
      ...,
      _type == "reference" => {
        "slug": @->slug.current,
        "title": @->title,
      },
    },
  },
  _type == "image" => {${SANITY_IMAGE_OBJECT_STUB}},
  _type == "button" => {
    link {
      text,
      reference->{"slug": slug.current},
      link
    },
  }
`;

export const ACTIVITY_OBJECT_STUB = groq`
  "source": "activities",
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  releaseDate,
  summary,
  image { ${SANITY_IMAGE_OBJECT_STUB} }
`;

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  _updatedAt,
  title,
  summary,
  "slug": slug.current,
  image { ${SANITY_IMAGE_OBJECT_STUB} },
  "tableOfContents": content[style in ["h2", "h3"]],
  content[] { ${CONTENT_OBJECT_STUB} },
  }`;

export const ACTIVITY_QUERY = groq`*[_type == "activity" && slug.current == $slug][0]{
  _id,
  _updatedAt,
  title,
  summary,
  releaseDate,
  "slug": slug.current,
  image { ${SANITY_IMAGE_OBJECT_STUB} },
  "tableOfContents": content[style in ["h2", "h3"]],
  content[] { ${CONTENT_OBJECT_STUB} },
}`;

export const HOME_QUERY = groq`*[_type == "activity" && defined(slug.current) && unlisted != true][0...3] | order(releaseDate desc)
  { ${ACTIVITY_OBJECT_STUB} }`;

export const ACTIVITIES_QUERY = groq`*[_type == "activity" && defined(slug.current) && unlisted != true] | order(releaseDate desc)
  { ${ACTIVITY_OBJECT_STUB} }`;
