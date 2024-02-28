import styles from "./Footer.module.css";

function Footer () {
    return (
      <footer>
        <section className={styles.Footer}>
          <section className={styles.FooterSocial}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="logo 1"></img>
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="logo 2"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="logo 3"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png" alt="logo 4"></img>
          </section>
  
          <hr className={styles.FooterContentSeparator} />
  
          <section className={styles.FooterLinks}>
            <div className={styles.FooterLinksCenter}>
            |<a href="/">About us</a>
              <a href="/">FAQ</a>
              <a href="/">Report</a>
              <a href="/">Learn more</a>
              <a href="/">Support us</a>|
            </div>
          </section>
  
          <section className={styles.FooterCopyright}>
            Copyright © 2024 TutorNet | All Rights Reserved
          </section>
        </section>
      </footer>
    );
  };

  export default Footer;