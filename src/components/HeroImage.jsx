import { motion } from "framer-motion"

const HeroImage = ({svgImage,heightSm,heightMd}) => {
    return (
        <div className="flex justify-center items-center ">
            <motion.img
                id="home-svg"
                initial={{ opacity: 0, y: -100, x: -1, scale: 0 }}
                animate={{ opacity: 1, y: 0 , scale: 1}}
                transition={{ duration: 0.5 , delay: 0.7}}
                className={`w-auto h-${heightSm} md:h-${heightMd}`}
                src={svgImage}
                alt="Imagen de Home"
            />
        </div>
    );
}

export default HeroImage;