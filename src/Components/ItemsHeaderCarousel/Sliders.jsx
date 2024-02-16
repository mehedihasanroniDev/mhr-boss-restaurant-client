import { Link } from 'react-router-dom';
const Sliders = ({image, routePath, routeName}) => {
    return (
        <>
        <div className="  "  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                }}>

                    <div style={
                        {backgroundImage: `url(${image})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'}
                    }
                    >

                    </div>


            <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
            }}
            >
            <Link to={`/${routePath}`}>

            <button


            className='px-10 py-3 bg-[#321647] text-white font-bold text-lg rounded-lg'>{routeName}</button>
            </Link>
                <p className='bg-[#321647] text-white mt-2 rounded p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae totam deserunt laboriosam hic nostrum sit at possimus, sed, id repellendus, enim quod? Minus eum officiis ab, ullam quae aperiam.</p>
            </div>

        </div>

        </>
    );
};

export default Sliders;