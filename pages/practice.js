import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Components/Navbar/Navbar"), { ssr: false });



export default function practice(){
    return(

        <>
        <Navbar/>


        <div>
            <h1>Dear Geeks! We here at Mckinely knows the importance of coding and technological knowledge to compete with the upcoming generation. So, we have designed a complete reference for you to scale up your skills </h1>


            <h2>Programming </h2>
            <ul>
                <li>
                    <a href="https://www.geeksforgeeks.org/">
                        geeksforgeeks
                    </a>


                </li>
                <li>
                    <a href="https://www.cpplusworld.com/">
                        cpplusworld


                    </a>
                    
                </li>
                <li>
                    
                </li>
                <li>
                    
                </li>
                <li>
                    
                </li>
            </ul>
        </div>

        </>










    );
}