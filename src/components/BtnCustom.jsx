import {motion} from "framer-motion";
import PropTypes from "prop-types";

const BtnCustom = (props) => {

    return (
        <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            type="submit"
            className=" mt-6 max-w-xs self-center bg-primary-light  text-dark border-2 border-sucess-dark  font-bold py-2 px-4 rounded-lg w-full h-12 shadow-lg hover:shadow-none hover:bg-sucess-dark hover:text-primary-light hover:font-bold disabled:bg-gray-light disabled:text-primary-light disabled:border-primary-light transition duration-150 ease-in-out"
            onClick={props.onClick}
            disabled={props.disabled}>
            
            <div className="flex justify-center items-center">
                <span className="text-base font-medium uppercase tracking-widest">{props.text}</span>
                <motion.svg
                    animate={{ translateX: 10 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: .7 }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="w-6 h-6 ml-2 icon-button icon-next ">
                
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                </motion.svg>
            </div>
        </motion.button>
    );
};

BtnCustom.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default BtnCustom;
