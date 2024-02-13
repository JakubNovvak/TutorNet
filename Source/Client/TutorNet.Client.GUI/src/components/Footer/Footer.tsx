import styles from "./Footer.module.css";

function Footer () {
    return (
      <footer>
        <section className={styles.Footer}>
          <section className={styles.FooterSocial}>
            <img  alt="logo 1"></img>
            <img  alt="logo 2"></img>
            <img  alt="logo 3"></img>
            <img  alt="logo 4"></img>
          </section>
  
          <hr className={styles.FooterContentSeparator} />
  
          <section className={styles.FooterLinks}>
            <div className={styles.FooterLinksCenter}>
              |<a href="">Element 1</a>
              <a href="">Element 2</a>
              <a href="">Element 3</a>
              <a href="">Element 4</a>
              <a href="">Element 5</a>|
            </div>
          </section>
  
          <section className={styles.FooterCopyright}>
            Copyright © 2024 TutorNet
          </section>
        </section>
      </footer>
    );
  };

  export default Footer;