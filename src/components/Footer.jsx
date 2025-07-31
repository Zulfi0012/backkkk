import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
          <Link to="/" className="text-light me-3">Home</Link>
          <Link to="/videos" className="text-light me-3">Videos</Link>
          <Link to="/posts" className="text-light me-3">Posts</Link>
          <Link to="/contact" className="text-light me-3">Contact Us</Link>
          <Link to="/privacy" className="text-light me-3">Privacy Policy</Link>
          <Link to="/about" className="text-light">About Us</Link>
        </div>
        <form className="mt-3 mt-md-0">
          <input type="text" className="form-control form-control-sm" placeholder="Search..." />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
