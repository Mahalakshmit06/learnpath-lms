import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-sky-400">404</h1>

      <p className="mt-4 text-slate-400">
        The page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 primary-btn"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;