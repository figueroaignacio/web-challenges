import styles from "./main-content.module.css";

const news = [
  {
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export function MainContent() {
  return (
    <>
      <section className={styles.hero}>
        <img src="/public/assets/images/image-web-3-mobile.jpg" alt="Hero" />
        <div>
          <h1 className={styles.heroTitle}>The Bright Future of Web 3.0?</h1>
          <div>
            <p className={styles.heroDescription}>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className={styles.heroButton}>Read More</button>
          </div>
        </div>
      </section>
      <section className={styles.new}>
        <h2 className={styles.newTitle}>New</h2>
        <ul className={styles.newList}>
          {news.map((item) => (
            <li>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
