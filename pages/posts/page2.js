import Head from "next/head"
import next from "next"

export default function Home( { toJSON } ) {

    console.log(toJSON)
    
    //return ( 
    //    {collection.map(toJSON => <h2>{toJSON.name}</h2>)
    //    )
    //}
}

export const getStaticProps = async () => {
    const res = await fetch('localhost:3000/api/hello');
    const toJSON = await res.json();

    //if fetch(res.status(404)) return {}
    //    res.page(404),
    //    res.send("error, api not found");}
    //
    
    return {
        props: {
            toJSON }
    }
}