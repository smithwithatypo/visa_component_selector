import { Navbar } from "../components/navbar/Navbar"
import { Search } from "../components/search/Search"
import { Preview } from "../components/preview/Preview"
import { Code } from "../components/code/Code"


export const Searching = () => {
    // const [backendData, setBackendData] = useState({});

    return (
        <> 
        <Navbar />
        <h1> Searching page </h1>
        <Search />
        <Code />
        <Preview />
        </>
    )
}