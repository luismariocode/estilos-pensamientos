import PropTypes from 'prop-types';

const StatementText = (props) => {
    return (
        <div className="w-full md:text-center text-2xl text-blue my-5">
            <div className="inline font-bold">
                <span>{props.numero}.&nbsp;</span>
                {props.text}
            </div>
        </div>
    );
};

StatementText.propTypes = {
    numero: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

export default StatementText;