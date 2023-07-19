import React from 'react';
import ImageHome from '../assets/home.svg';

const Home = () => {
    return (
        <main className='home-main grid grid-rows-3 grid-cols-1 gap-0'>
           <section className=' flex  justify-center'>
                <img src={ImageHome} alt="" />
           </section>
           <section className=' text-left'>
            <span className='font-primary font-medium'>Test</span>
            <h1 className="text-4xl	text-color-primary font-bold font-primary" >Titulo de<br/> Cuestionario</h1>
            <button className='mt-6 bg-color-primary font-bold py-2 px-4 rounded-lg w-full h-12'>
                <span className='text-color-light'>COMENZAR</span>
            </button>    
            </section>
            <footer className=' border border-cyan-500'>

            </footer>
        </main>
    );
};

export default Home;