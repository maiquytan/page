import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Request from "./Request/Request";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header/>
      {children}
      <Request/>
      <Footer />
    </div>
  );
}

export default Layout;
