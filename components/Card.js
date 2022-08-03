import destinationsData from '../data/destinations';
import Image from 'next/image';
import Link from 'next/link';

export default function Card(props) {
    var border = props.border;
    var highlight = props.highlight;
    var highlightCl = 'font-sans text-3xl text-center p-2 bg-' + highlight
    var borderCl = 'cursor-pointer w-full border-solid border-2 rounded-md p-5 border-' + border;

    var destId = parseInt(props.id)
    var destinations = destinationsData; 
    var destination = destinations.find(x => x.id === destId); 
    var destImg = destination.img; 
    var destName = destination.name;
    var destDesc = destination.desc;
    var linkDest = '/destinations/' + encodeURIComponent(destId);

    return (
        <Link href={linkDest}>
            <div className={borderCl}>
                <div className={highlightCl}>
                    {destName}
                </div>
                <div className="text-center mt-5">
                    <Image 
                        src={destImg}
                        alt={destName}
                        width={150}
                        height={150}
                        className="rounded-full"
                    />
                </div>
            </div>
        </Link>
    )
} 