import { useEffect, useContext } from "react"
import { DataContext } from '../App';
import { Navbar } from "../components/navbar/Navbar"
import { Search } from "../components/search/Search"
import { Preview } from "../components/preview/Preview"
import { Code } from "../components/code/Code"
import { DefaultFooter } from "../components/footer/Footer"
import { Utility } from '@visa/nova-react';

import './Searching.css'

import { handleSearch } from "../api"


export const Searching = () => {
  const { data, setData } = useContext(DataContext);
  const { searchInput } = useContext(DataContext);
  
  // const errorData = {      // moved to api.js
  //   tabLabel: "",
  //   text: "sorry, there was a server issue. Can you try again?",
  //   id: "100"
  // }  
    
    // for debugging
    useEffect(() => {
        if (data) {
            console.log("Data state updated:", data);
        }
    }, [data]);
    
  const onSearchSubmit = () => handleSearch(searchInput, setData);



    // const handleSearch = async () => {           // moved to api.js
    //   try {
    //     // console.log("search input is: ", searchInput)
    //     const payload = {"searchInput": searchInput}
    //     const backendData = await makePostRequest(payload);
    //     console.log("Backend response:", backendData);
        
    //     if (backendData.data && backendData.data !== "server error") {
    //       setData(backendData.data);
    //     } else {
    //       setData(errorData);
    //       console.log("No valid data received from backend");
    //     }
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //     setData(errorData);
    //   }
    // };


    return (
      <div className="page-container"> 
          <Navbar />
          <div className="content-wrapper">
            <Utility vFlexRow vMarginRight={20} vMarginBottom={16}>
              {/* <Search onSearchSubmit={handleSearch} fromLanding={false}/> */}
              <Search onSearchSubmit={onSearchSubmit} fromLanding={false}/>

            </Utility>
              <Code data={data} />
              {/* <Preview data={data} /> */}
          </div>          
          <div className="footer">
              <DefaultFooter />
          </div>
      </div>
    )
}