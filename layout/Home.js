import Head from "next/head"

const Home = ({children})=>{
    return(
        <div>
            <Head>
                <title>FitCardio</title>
                <meta name="description" content="Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {children}
        
        </div>  
    )
}
 
export default Home;

