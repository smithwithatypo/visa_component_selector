import { useState, useEffect } from "react"
import { Navbar } from "../components/navbar/Navbar"
import { Search } from "../components/search/Search"
import { Preview } from "../components/preview/Preview"
import { Code } from "../components/code/Code"
import { DefaultFooter } from "../components/footer/Footer"
import './Searching.css'

import {makePostRequest} from "../api"

import { CollapsedAccordion } from "../shared/ui/Accordian"




export const Searching = () => {
  const errorData = {
    tabLabel: "",
    text: "sorry, there was a server issue. Can you try again?",
    id: "100"
  }  

  const [data, setData] = useState();
    
    // for debugging
    useEffect(() => {
        if (data) {
            console.log("Data state updated:", data);
        }
    }, [data]);
    
    const handleSearch = async (userInputFromSearch) => {

      try {
        const backendData = await makePostRequest(userInputFromSearch);
        console.log("Backend response:", backendData);
        
        if (backendData.data && backendData.data !== "server error") {
          setData(backendData.data);
        } else {
          setData(errorData)
          console.log("No valid data received from backend");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    return (
      <div className="page-container"> 
          <Navbar />
          <div className="content-wrapper">
              <Search onSendToParent={handleSearch}/>
              <Code data={data} onSendToParent={handleSearch}/>
              <Preview data={data} />
          </div>
          <div className="embedded-component">
            <CollapsedAccordion />
          </div>

          
          <div className="footer">
              <DefaultFooter />
          </div>
      </div>
    )
}