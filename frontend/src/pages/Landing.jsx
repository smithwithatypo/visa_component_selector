import { Navbar } from '../components/navbar/Navbar'
import { Search } from '../components/search/Search'
import { DefaultFooter } from '../components/footer/Footer'
import './Landing.css'

export const Landing = () => {
    return ( 
        <>
        <Navbar />
        <Search />
        <DefaultFooter />
        </>
     );
}