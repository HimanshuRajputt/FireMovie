import "../styles/Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p className="footer-text">
        © {currentYear} | All Rights Reserved | Designed by{" "}
        <span>@Himanshu Rajput</span>
      </p>
    </footer>
  );
};

export default Footer;