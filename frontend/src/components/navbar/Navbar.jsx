import { useState } from 'react'
import './Navbar.css'


export const Navbar = () => {
    const [test, setTest] = useState("hiiiii");

    return ( 
        <>
        <div className="testing">
        {test} 
        <button onClick={setTest}>set test</button>
        </div>
        </>
    );
}

