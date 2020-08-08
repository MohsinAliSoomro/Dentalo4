import Header from '../Header';
import Uheader from '../Uheader/Uheader';
import Banner from './Banner';
import Boxes from './boxes/Boxes';
import Tablegrid from '../Layoutb/Tablegrid';
import Testimonials from '../Layoutb/Testimonials';
import Trending from '../Layoutb/Trending';
import Contactform from '../Layoutb/Contactform';
import Footer from '../Layout/Footer';

const LayoutB = ({ children }) => {
    return (
        <React.Fragment>
            <Uheader />
            <Header />
            <Banner />
            <Boxes />
            <Tablegrid />
            <Trending />
            
            {children}
           
        </React.Fragment>
    );
};

export default LayoutB;
