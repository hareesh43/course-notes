import styles from "../styles/Home.module.css";
import { createClient } from "contentful";
import Card from "../component/Card";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "material" });

  return {
    props: {
      materials: res.items,
      revalidate: 1,
    },
  };
}

export default function Home({ materials }) {
  console.log(materials);
  return (
    <div className="home">
      <h1>Hello There !!</h1>
      <div className={styles.materials}>
        {materials.map((material) => (
          <Card key={material.fields.title} material={material} />
        ))}
      </div>
    </div>
  );
}
