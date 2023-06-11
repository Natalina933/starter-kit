import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center my-10 mx-20'>
            <h1 className='text-5xl font-bold text-gray-400 my-10'>P<span className='text-blue-600'>ermanences</span></h1>
            <div className='text-center'>
                <p className='text-lg'>Tous les mardis de 14h30 à 17h</p>
                <h2 className='text-xl mt-4 max-w-xs'>Nos hôtesses Andrée CORNET et Françoise CHAUBEAU seront heureuses de vous accueillir à la salle polyvalente : CENTRE CRESCO - Salle Bruno Cremer, 4 avenue Pasteur à Saint-Mandé.</h2>
            </div>
        </div>
    );
};

export default Footer;
