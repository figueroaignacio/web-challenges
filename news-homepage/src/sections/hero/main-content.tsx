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
    <div className={styles.mainContentBox}>
      <section className={styles.mainContent}>
        <img
          src="/assets/images/image-web-3-mobile.jpg"
          alt="Hero"
          className={styles.mainContentMobileImg}
        />
        <img
          src="/assets/images/image-web-3-desktop.jpg"
          alt="Hero"
          className={styles.mainContentDesktopImg}
        />
        <div>
          <h1 className={styles.mainContentTitle}>
            The Bright Future of Web 3.0?
          </h1>
          <div>
            <p className={styles.mainContentDescription}>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className={styles.mainContentButton}>Read More</button>
          </div>
        </div>
      </section>
      <section className={styles.new}>
        <h2 className={styles.newTitle}>New</h2>
        <ul className={styles.newList}>
          {news.map((item) => (
            <li>
              <div>
                <a href="#">{item.title}</a>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
