import {Layout} from "../components";



//Contenido de home
import {Thankyou as Main} from "../sections/mains";


const Thankyou = () => {

    return (
        <div className="min-h-screen">
        <Layout 
            gridLayout={2}
            heightLayout="screen"
<<<<<<< HEAD
            sectionHero={<HeroImage svgImage={Image} heightSm={14} heightMd={14}/>}
            sectionContent={<ContentThankyou />}
=======
            // sectionHero={<HeroImage svgImage={Image} heightSm={16} heightMd={16}/>}
            sectionContent={<Main />}
>>>>>>> dev
        />
    </div>
    );
}


export default Thankyou;