import { useRouter } from 'next/router';

import Footer from './Footer/Footer';
import FooterJp from './Footer/FooterJp';
import Header from './Header/Header';
import HeaderJp from './Header/HeaderJp';
import Request from './Request/Request';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="content">
      {router.pathname.includes('/jp') ? (
        <>
          <HeaderJp />
          {children}
          <FooterJp />
        </>
      ) : (
        <>
          <Header />
          {children}
          <Request />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
