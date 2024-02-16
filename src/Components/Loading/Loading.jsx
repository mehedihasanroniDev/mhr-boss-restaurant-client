import loaderImage from '../../assets/others/loader2.gif'

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
        <img src={loaderImage} className=" " alt="" />
        </div>
    );
};

export default Loading;