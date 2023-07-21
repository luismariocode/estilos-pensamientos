import svgHome from "../assets/home.svg"
import { motion } from "framer-motion"

const ImgHome = () => {
    return (
        <motion.img
            id="home-svg"
            initial={{ opacity: 0, y: -100, x: -1, scale: 0 }}
            animate={{ opacity: 1, y: 0 , scale: 1}}
            transition={{ duration: 0.5 , delay: 0.7}}
            className="h-44 w-auto md:h-60" src={svgHome} alt="Imagen de Home"
        />
    );
}

export default ImgHome;