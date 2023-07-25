import {motion} from "framer-motion";

const BtnPrimary = ({ text, onClick }) => {

    return (
        <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="max-w-xs mt-6 self-center bg-sucess border-2 border-sucess-dark  font-bold py-2 px-4 rounded-lg w-11/12 h-12 sm:w-1/2  hover:bg-sucess-dark hover:font-bold transition duration-150 ease-in-out"
            onClick={onClick}>
            <div className="flex justify-center items-center">
                <span className="text-base text-light font-medium uppercase tracking-widest">{text}</span>
                <motion.svg
                    animate={{ translateX: 10 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: .7 }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6 ml-2">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                </motion.svg>
            </div>
        </motion.button>
    );
};

export default BtnPrimary;
