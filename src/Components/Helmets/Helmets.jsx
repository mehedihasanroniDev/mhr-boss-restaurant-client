import { Helmet } from "react-helmet";

const Helmets = ({title}) => {
    return (
        <>
        <Helmet>
            <title>MHR BOSS | {title}</title>
        </Helmet>

        </>
    );
};

export default Helmets;