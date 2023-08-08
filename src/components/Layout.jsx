import Footer from "./Footer";
import PropTypes from "prop-types";


const Layout = ({heightLayout, header, gridLayout, sectionHero, sectionContent }) => {
  return(
  <div className={`h-${heightLayout} min-h-screen min-w-min	  relative bg-light`}>
    {header && <header>{header}</header>}
    <main className={`grid grid-rows-${gridLayout}  pt-[25%] md:pt-[7%]`}>
      {sectionHero}
      {sectionContent}
    </main>
    <Footer />
  </div>
  );
};

Layout.propTypes = {
  heightLayout: PropTypes.string,
  header: PropTypes.element,
  gridLayout: PropTypes.string,
  sectionHero: PropTypes.element,
  sectionContent: PropTypes.element,
};


export default Layout;