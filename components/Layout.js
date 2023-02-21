import HomePage from "./HomePage/HomePage";

const Layout = ({ children }) => {
  return (
    <div className="content">
      {/* <Nav /> */}
      <HomePage/>
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
