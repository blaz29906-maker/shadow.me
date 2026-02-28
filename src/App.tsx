import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './pages/Home';
import Work from './pages/Work';
import Arsenal from './pages/Arsenal';
import Identity from './pages/Identity';
import Documentary from './pages/Documentary';
import WebDesign from './pages/WebDesign';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import Architect from './pages/Architect';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import FadeIn from './components/ui/FadeIn';

function App() {
    return (
        <>
            <CustomCursor />
            <Layout>
                <div className="flex flex-col w-full relative z-10">
                    <section id="home"><FadeIn><Hero /></FadeIn></section>
                    <div className="flex flex-col gap-32 lg:gap-48 mt-32 lg:mt-48">
                        <FadeIn><Work /></FadeIn>
                        <section id="ugc"><FadeIn><Arsenal /></FadeIn></section>
                        <section id="cinematics"><FadeIn><Identity /></FadeIn></section>
                        <section id="documentary"><FadeIn><Documentary /></FadeIn></section>
                        <FadeIn><WebDesign /></FadeIn>
                        <section id="services"><FadeIn><Services /></FadeIn></section>
                        <section id="packages"><FadeIn><Pricing /></FadeIn></section>
                        <section id="testimonials"><FadeIn><Testimonials /></FadeIn></section>
                        <section id="director"><FadeIn><Architect /></FadeIn></section>
                    </div>
                </div>
                <FadeIn><Footer /></FadeIn>
            </Layout>
        </>
    );
}

export default App;
