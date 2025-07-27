import { useState } from "react"
import { Navbar } from "../components/navbar/Navbar"
import { Search } from "../components/search/Search"
import { Preview } from "../components/preview/Preview"
import { Code } from "../components/code/Code"

import {makeGetRequest} from "../api"




export const Searching = () => {
    const [data, setData] = useState("no data loaded yet");
    
    const handleSearch = (userInputFromSearch) => {
      // make an API call with 'userInputFromSearch' being body in post call to AI
      // backend should return just 3 top choices / objects
      // data will be a list of 3 objects
      console.log(userInputFromSearch);  // delete this line
      const backendData = makeGetRequest();
      console.log("backend data here: ", backendData);  // this works!
    //   setData(backendData);

    };


    return (
        <> 
        <Navbar />
        <h1> Searching page </h1>
        <p>data is: {data} </p>
        <Search onSendToParent={handleSearch}/>
        <Code onSendToParent={handleSearch}/>
        <Preview />
        </>
    )
}