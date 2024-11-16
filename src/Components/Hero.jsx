import React from 'react';
import Banner from './Banner';

const Hero = () => {
    return ( 
            
           <div className='flex flex-col  relative items-center justify-center min-h-[calc(100vh-116px)]'>
           <Banner></Banner>
           
 
            <img className="w-full absolute bottom-0" src='/src/assets/wave.svg' alt="" />
        
        </div>
    );
};

export default Hero;