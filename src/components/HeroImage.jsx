import { motion } from "framer-motion"
import PropTypes from 'prop-types';

const HeroImage = (props) => {
    return (
        <div className="flex justify-center items-center">
            <motion.img
                id="home-svg"
                initial={{ opacity: 0, y: -100, x: -1, scale: 0 }}
                animate={{ opacity: 1, y: 0 , scale: 1}}
                transition={{ duration: 0.5 , delay: 0.7}}
                className={`w-[150px] h-${props.heightSm} md:h-${props.heightMd}`}
                src={props.svgImage}
                alt="Imagen de Home"
            />
        </div>
    );
}

HeroImage.propTypes = {
    svgImage: PropTypes.string.isRequired,
    heightSm: PropTypes.string.isRequired,
    heightMd: PropTypes.string.isRequired,
    
}

export default HeroImage;