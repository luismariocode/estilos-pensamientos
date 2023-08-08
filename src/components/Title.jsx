import PropTypes from "prop-types";

const Title = (props) => {
    return (
        <>
            <span className="font-primary font-bold text-secondary text-2xl self-center">
                {props.subtitle}
            </span>
            <h1 className="text-5xl text-primary font-bold leading-10 font-primary self-center md:w-4/12 xl:text-6xl">
                {props.title}
            </h1>
        </>
    );
};

Title.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};


export default Title;