import Header from '../src/components/landingpage/header'
import Footer from '../src/components/landingpage/footer'


export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header/>
            <Footer/>
        </div>
    );
}
