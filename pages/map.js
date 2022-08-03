import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import("../components/Map"), {
    loading: () => <p>Map is loading</p>,
    ssr: false, // This line is important. It's what prevents server-side render
 });

export default function MapPage() {
    return ( 
        <>
            <Head>
                <title>Vacationlands Map</title>
            </Head>
            <main className="container">
                <div style={{height: 350 + 'px'}}>
                    <Map coordinates={[58.089, 2.373]} />
                </div>
            </main>
        </>
    )
}