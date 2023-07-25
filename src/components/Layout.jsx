import Footer from "./Footer";



const Layout = ({heightLayout, header, gridLayout, sectionHero, sectionContent }) => {
  return(
  <div className={`h-${heightLayout} min-h-screen relative`}>
    {header && <header>{header}</header>}
    <main className={`grid grid-rows-${gridLayout}  pt-6 `}>
      {sectionHero}
      {sectionContent}
    </main>
    <Footer />
  </div>
  );
};


export default Layout;