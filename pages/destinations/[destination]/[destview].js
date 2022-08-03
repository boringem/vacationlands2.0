import wyoming from '../../../data/wyoming.js';
import { useRouter } from 'next/router'
import DetailNav from '../../../components/DetailNav'
import Banner from '../../../components/Banner'
import Image from 'next/image'

const DestView = () => {
    const router = useRouter();
    const { destination, destview } = router.query;

    var destData = wyoming;

    var destData;
    var destName;
    if (destination == '6') {
        destData = wyoming;
        destName = 'Wyoming'

    }
    var bannerImg = '/../public/img/' + destData.images.banner;

    return (
        <main className="container">
            <div className="grid grid-cols-2 gap-4">
                <section className="relative col-span-2">
                    <Banner subtitle="vacationlands" dest={destName} />
                    <div class="relative h-72 w-1/3">
                        <Image src={bannerImg} width={450} height={225} alt={destName} layout="fill" />
                    </div>
                </section>
                <DetailNav activeView={destview} destName={destName} />
            </div>
        </main>
    )
}
export default DestView;