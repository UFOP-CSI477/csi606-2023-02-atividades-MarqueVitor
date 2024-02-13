import React from 'react';
import FeedComp from './Feed/Feed';
import Head from './Help/Head';

const Home = () => {

    return (
        <section className='container mainContainer'>
            <Head title="Fotos"/>
            <FeedComp/>
        </section>
    )

}

export default Home