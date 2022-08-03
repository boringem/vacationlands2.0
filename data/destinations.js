var destinations = [
    {   
        id: 1,
        name: 'California', 
        img: 'california.png',
        desc: 'Limitless opportunity'
    },
    {
        id: 2,
        name: 'Colorado', 
        img: 'colorado.png',
        desc: 'The ideal background for a perfect vacation'
    },
    {
        id: 3,
        name: 'Idaho',
        img: 'idaho.png',
        desc: "Famous year &apos;round sports center"
    },
    {
        id: 4,
        name: 'Oregon',
        img: 'oregon.png',
        desc: 'Setting of enchanted beauty'
    },
    {
        id: 5,
        name: 'Utah',
        img: 'utah.png', 
        desc: 'A world both spectacular and unusual'
    }, 
    {
        id: 6,
        name: 'Wyoming', 
        img: 'wyoming.png',
        desc: 'Where the tang of the Old West still lingers', 
        longDesc: {
            section1: {
                text: '“The tang of the ',
                linkText: 'Old West',
                linkDest: 'discover'
            },
            section2: {
                text: ' still lingers in Grand Teton National Park. This is real old-time cattle country and it isn’t hard to picture the riding cowboy, the Indian with feathered head, the smell of the branding iron, the outlaw, and all the other ', 
                linkText: 'lore',
                linkDest: 'stay'
            }, 
            section3: {
                text: ' familiar to ',
                linkText: 'every American boy',
                linkDest: 'play',
                postText: '.”'
            }
        }
    }
]

export default destinations;