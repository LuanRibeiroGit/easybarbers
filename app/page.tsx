import Header from '../src/components/landingpage/header'
import Footer from '../src/components/landingpage/footer'
import Hero from '../src/components/landingpage/hero'


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    );
}
