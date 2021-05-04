import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <title>Course Content</title>
      </header>
      <Navbar />
      <div className="page-content">{children}</div>
      <footer>
        <p>Copy right received @ 2021</p>
      </footer>
    </div>
  );
}
