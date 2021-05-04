import { createClient } from "contentful";
import { useState } from "react";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "material",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "material",
    "fields.slug": params.slug,
  });

  return {
    props: { material: items[0] },
  };
};

export default function Document({ material }) {
  const [preview, setPreview] = useState(false);
  const { title, slug, filesUpload, details } = material.fields;
  return (
    <div>
      <h1>Document {title}</h1>
      <button onClick={(e) => setPreview(!preview)}>Preview</button>
      <br/>
      {/* <iframe
          src={material.fields.filesUpload[0].fields.file.url}
            width="800px"
            height="2100px"
          frameborder="0"
        ></iframe> */}

      {preview && (
        <embed
          src={`https:${material.fields.filesUpload[0].fields.file.url}`}
          width="800px"
          height="2100px"
        />
      )}
    </div>
  );
}
