const BtnPrimary = ({ text, onClick }) => {

    return (
        <button
            className="transition duration-150 ease-in-out  mt-5 bg-primary border-2 border-secondary font-bold py-2 px-4 rounded-lg w-full h-12 sm:w-1/2 sm:justify-self-center hover:bg-secondary hover:text-gray"
            onClick={onClick}>
            <div className="flex justify-center items-center">
                <span className="text-base text-light font-thin uppercase tracking-wide">{text}</span>
                <svg
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
                </svg>
            </div>
        </button>
    );
};

export default BtnPrimary;
