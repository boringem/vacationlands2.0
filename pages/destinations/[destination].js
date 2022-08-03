import Head from 'next/head'
import Image from 'next/image'
import destinationsData from '../../data/destinations.js'
import wyoming from '../../data/wyoming.js';
import { useRouter } from 'next/router'
import Banner from '../../components/Banner';
import Link from 'next/link';

const Destination = () => {
    const router = useRouter();
    const { destination } = router.query;
    var data = destinationsData; 
    var destInt = parseInt(destination) || 1
    // set destination 
    var currentDest = data.find(x => x.id === destInt); 
    var destName = currentDest.name;

    var destData, bannerImg, link1Dest, link2Dest, link3Dest;
    if (destName == 'Wyoming') {
        destData = wyoming;
        bannerImg = '/../public/img/' + destData.images.banner;
        link1Dest = '/destinations/' + currentDest.id + '/' + currentDest.longDesc.section1.linkDest;
        link2Dest = '/destinations/' + currentDest.id + '/' + currentDest.longDesc.section2.linkDest;
        link3Dest = '/destinations/' + currentDest.id + '/' + currentDest.longDesc.section3.linkDest;
    } 

    if (destName == 'Wyoming') {
        return (
            <>
                <Head>
                    <title>Vacationlands | {destName}</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Serif+Pro:wght@400;600&family=Yellowtail&display=swap" 
                        rel="stylesheet"></link>
                    <link rel="stylesheet" href="../../dist/globals.css"></link>
                </Head>
                <main className="container">
                    <div className="grid grid-cols-2 gap-4">
                    <section className="relative col-span-2">
                        <Banner subtitle="vacationlands" dest={destName} />
                        <div className="relative h-72 w-1/3">
                            <Image src={bannerImg} width={500} height={300} alt={destName} layout="fill" />
                        </div>
                    </section>
                    <section className="max-h-52 mt-3">
                        <h2 className="font-decor text-4xl text-purple">"{currentDest.desc}"</h2>
                        <p className="font-serif text-xl text-black">
                            {currentDest.longDesc.section1.text} 
                            <Link href={link1Dest}>
                                <a href={link1Dest} className="text-purple bold underline">
                                    {currentDest.longDesc.section1.linkText}
                                </a>
                            </Link>
                            {currentDest.longDesc.section2.text}
                            <Link href={link2Dest}>
                                <a href={link2Dest} className="text-purple bold underline">
                                    {currentDest.longDesc.section2.linkText}
                                </a>
                            </Link>
                            {currentDest.longDesc.section3.text}
                            <Link href={link3Dest}>
                                <a href={link3Dest} className="text-purple bold underline">
                                    {currentDest.longDesc.section3.linkText}
                                </a>
                            </Link>  
                            {currentDest.longDesc.section3.postText}                      
                        </p>
                    </section>
                    </div>
                </main>
            </>
        )
    } else {
        return (
            <>
                <Head>
                    <title>Vacationlands | {destName}</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Serif+Pro:wght@400;600&family=Yellowtail&display=swap" 
                        rel="stylesheet"></link>
                    <link rel="stylesheet" href="../../dist/globals.css"></link>
                </Head>
                <main className="container text-center mt-5">
                    <h1 className="font-sans text-5xl">Under Construction</h1>
                    <p className="font-serif text-xl mt-1">Check back soon!</p>
                    <Link href="/" className="font-serif text-purple underline">
                            Home
                    </Link>
                </main>
            </>
        )
    }
}

export default Destination;