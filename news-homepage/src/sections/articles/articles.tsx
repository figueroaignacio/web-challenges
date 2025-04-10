import styles from "./articles.module.css";

const articles = [
  {
    img: "/assets/images/image-retro-pcs.jpg",
    number: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    img: "/assets/images/image-top-laptops.jpg",
    number: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
  },
  {
    img: "/assets/images/image-gaming-growth.jpg",
    number: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];

export function Articles() {
  return (
    <ul className={styles.articles}>
      {articles.map((item, index) => (
        <li key={index}>
          <div className={styles.articleCard}>
            <img
              src={item.img}
              alt={item.title}
              className={styles.articleImg}
            />
            <div className={styles.articleCardContent}>
              <span>{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
