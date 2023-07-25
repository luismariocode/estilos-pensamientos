import { motion } from "framer-motion"

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 , y: 100}}
            animate={{ opacity: 1 , y: 0}}
            transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bg-secondary bottom-0 w-full h-auto pb-3 shadow-lg ">
                <div className="pt-2 h-50  mb-5  text-center  w-full">
                    <span className="text-muted  text-sm text-dark font-secondary">
                        Desarrollado por&nbsp;@
                        <a href="https://www.linkedin.com/in/luis-mario-ortiz/" className="underline hover:text-secondary">luismariocode</a>
                    </span>
                </div>
        </motion.footer>
    );
}

export default Footer;