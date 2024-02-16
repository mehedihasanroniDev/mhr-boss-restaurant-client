import Footer from '../../Components/Footer/Footer';
import Helmets from '../../Components/Helmets/Helmets';
import Navbar from '../../Components/Nabvars/Navbar/Navbar';
import errorImage from '../../assets/others/404.gif'
const ErrorMegases = () => {
    return (
        <div className="h-[95vh]">
             <Helmets title={'404 Page Not Found'} />
            <Navbar/>
            <img src={errorImage} className='h-full w-full' alt="" />
            <Footer/>
        </div>
    );
};

export default ErrorMegases;
