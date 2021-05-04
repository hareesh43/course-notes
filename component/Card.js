import Link from "next/link";

import styles from "../styles/Card.module.css";

export default function Card({ material }) {
  const { title, slug, filesUpload, details } = material.fields;

  return (
    <>
      <div>
        <div className={styles.content}>
          <div className={styles.info}>
            <h4>{title}</h4>
          </div>
          <div className="actions">
            <Link href={"/document/" + slug}>
              <a>Goto Material</a>
            </Link>
          </div>
        </div>
        
   
      </div>
    </>
  );
}
