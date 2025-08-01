import { useContext } from "react"
import { DataContext } from '../App';
import { Navbar } from '../components/navbar/Navbar'
import { Search } from '../components/search/Search'
import { DefaultFooter } from '../components/footer/Footer'
import { Utility, Typography } from '@visa/nova-react';
import { BottomTooltip } from '../components/tooltip/Tooltip'
import './Landing.css'

import { handleSearch } from "../api"



export const Landing = () => {
    const { setData } = useContext(DataContext);
    const { searchInput } = useContext(DataContext);
    const onSearchSubmit = () => handleSearch(searchInput, setData);


    return ( 
        <>
        <div className="page-container"> 
            <Navbar />

            {/* <Utility vFlex vAlignItems='center' vJustifyContent='center' vFlexCol vRowGap={4}> */}
            {/* <Utility vFlexCol vJustifyContent='center' vRowGap={4} vMinHeight='100vh'> */}
            <Utility vFlex className="hero-section">
                <Utility  vPadding={12} vMarginTop={0} vAlignSelf='center'>
                    <Utility vFlex>
                        <Typography variant="headline-1">What are we building today?</Typography>
                        <BottomTooltip />
                    </Utility>
                </Utility>
                <Utility vAlignSelf='center'>
                    <Search onSearchSubmit={onSearchSubmit} fromLanding={true}/>
                </Utility>
            </Utility>

            <div className="footer">
                <DefaultFooter />
            </div>
        </div>


        </>
     );
}