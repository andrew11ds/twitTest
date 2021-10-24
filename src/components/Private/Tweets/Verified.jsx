import Icon from './../../../icons/verified.svg'
const Verified = ({ verified }) => {
    if (verified == "true") {
        return (
            <img src={Icon} />

        );
    }
    return (
        <>
        </>
    );
};

export default Verified;