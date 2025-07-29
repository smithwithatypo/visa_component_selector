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
    
    // Log data changes to see when it gets updated  (for debugging)
    useEffect(() => {
        if (data) {
            console.log("Data state updated:", data);
        }
    }, [data]);
    
    const handleSearch = async (userInputFromSearch) => {
      // make an API call with 'userInputFromSearch' being body in post call to AI
      // backend should return just 3 top choices / objects
      // data will be a list of 3 objects

      try {
        const backendData = await makePostRequest(userInputFromSearch);
        console.log("Backend response:", backendData);
        
        if (backendData.data && backendData.data !== "no data") {
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
      </div>
    )
}