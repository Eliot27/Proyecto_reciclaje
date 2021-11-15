import styles from "./notice.module.css";
// this component do it news for ecology with images of plants and animals recicling papers and plastic in the trash
const News = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>News</h1>
      </div>
      <div className={styles.news}>
        <div className={styles.news_item}>
          <div className={styles.news_item_image}>
            <img src="https://images.unsplash.com/photo-1512339895-f9c9e3f3d8b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="news" />
          </div>
          <div className={styles.news_item_text}>
            <h2>Recycling paper and plastic</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sed nisl eu nisi egestas pretium.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae;
            </p>
          </div>
        </div>
        <div className={styles.news_item}>
          <div className={styles.news_item_image}>
            <img src="https://images.unsplash.com/photo-1512339895-f9c9e3f3d8b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="news" />
          </div>
          <div className={styles.news_item_text}>
            <h2>Recycling paper and plastic</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sed nisl eu nisi egestas pretium.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices

            </p>
            </div>
        </div>
        <div className={styles.news_item}>
            <div className={styles.news_item_image}>
                <img src="https://images.unsplash.com/photo-1512339895-f9c9e3f3d8b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="news" />
            </div>
            <div className={styles.news_item_text}>
                <h2>Recycling paper and plastic</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse sed nisl eu nisi egestas pretium.

                </p>
            </div>
        </div>
        </div>
    </div>
    );
};

export default News;

