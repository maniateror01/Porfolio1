import { useParams } from "react-router-dom";
import { portfolioList } from '../data/DataPortfolio.jsx'
import Footer from '../components/Footer.jsx';
import Navbar from "../components/Navbar.jsx";
import NotFound from "./NotFound.jsx";
import '../styles/DetailPortfolio.css';
import ScrollToTop from '../components/ScrollToTop.jsx'

function DetailPortfolio() {
    const { id } = useParams();
    const data = portfolioList.find((item) => item.id === parseInt(id))
    if (data === undefined) {
        return (<NotFound />)
    }
    return (
        <>
            <Navbar />
            <section id="detail-portfolio">
                <div className="wrapper">
                    <h1>{data.tittle}</h1>
                    <img src={data.image} alt="" />
                    <p className="skill"><b>Skills:</b>{data.skills}</p>
                </div>
            </section>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default DetailPortfolio