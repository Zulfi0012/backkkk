import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container text-center">
    <h1 className="display-4">404</h1>
    <p className="lead">Page not found</p>
    <Link to="/" className="btn btn-outline-primary">Go back home</Link>
  </div>
);

export default NotFound;
