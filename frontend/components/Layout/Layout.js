import Header from '../Header';
import Uheader from '../Uheader/Uheader';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Uheader />
            <Header />
            {children}
           <Footer />
        </React.Fragment>
    );
};

export default Layout;
