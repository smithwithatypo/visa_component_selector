import { useState, useEffect } from "react"
import { Navbar } from "../components/navbar/Navbar"
import { Search } from "../components/search/Search"
import { Preview } from "../components/preview/Preview"
import { Code } from "../components/code/Code"
import { DefaultFooter } from "../components/footer/Footer"
import './Searching.css'

import {makePostRequest} from "../api"




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
          <div className="footer">
              <DefaultFooter />
          </div>
          <div className="testing_delete">
            <iframe loading="lazy" sandbox="allow-same-origin allow-scripts allow-forms" title="Interaction example for accordion example &quot;Default accordion&quot;" src="/react/version/2.5.4/raw/components/accordion/collapsed-accordion" style="inline-size: 100%; height: 100%; min-height: calc(159px * var(--example-resize-factor)); border-top-left-radius: ; border-top-right-radius: ; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;"></iframe>
          </div>
      </div>
    )
}