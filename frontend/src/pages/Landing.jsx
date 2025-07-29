import { Navbar } from '../components/navbar/Navbar'
import { Search } from '../components/search/Search'
import { DefaultFooter } from '../components/footer/Footer'
import './Landing.css'


export const Landing = () => {

    return ( 
        <>
        <div className="page-container"> 
            <Navbar />
            <div className="content-wrapper">
                <Search fromLanding={true}/>
            </div>          
            <div className="footer">
                <DefaultFooter />
            </div>
        </div>
        </>
     );
}