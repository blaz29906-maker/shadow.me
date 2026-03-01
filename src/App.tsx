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
import ScrollReveal from './components/ui/ScrollReveal';

function App() {
    return (
        <>
            <CustomCursor />
            <Layout>
                <div className="flex flex-col w-full relative z-10">
                    <section id="home"><ScrollReveal immediate={true}><Hero /></ScrollReveal></section>
                    <div className="flex flex-col gap-32 lg:gap-48 mt-32 lg:mt-48">
                        <ScrollReveal><Work /></ScrollReveal>
                        <section id="ugc"><ScrollReveal><Arsenal /></ScrollReveal></section>
                        <section id="cinematics"><ScrollReveal><Identity /></ScrollReveal></section>
                        <section id="documentary"><ScrollReveal><Documentary /></ScrollReveal></section>
                        <ScrollReveal><WebDesign /></ScrollReveal>
                        <section id="services"><ScrollReveal><Services /></ScrollReveal></section>
                        <section id="packages"><ScrollReveal><Pricing /></ScrollReveal></section>
                        <section id="testimonials"><ScrollReveal><Testimonials /></ScrollReveal></section>
                        <section id="director"><ScrollReveal><Architect /></ScrollReveal></section>
                    </div>
                </div>
                <ScrollReveal><Footer /></ScrollReveal>
            </Layout>
        </>
    );
}

export default App;
