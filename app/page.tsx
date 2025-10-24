import Header from '../src/components/landingpage/header'
import Footer from '../src/components/landingpage/footer'
import Hero from '../src/components/landingpage/hero'
import Benefits from '../src/components/landingpage/benefits'
import Testimonials from '@/src/components/landingpage/testimonials';
import Cta from '@/src/components/landingpage/cta';


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header/>
                <Hero/>
                <Benefits/>
                <Testimonials/>
                <Cta/>
            <Footer/>
        </div>
    );
}
