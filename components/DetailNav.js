import React from 'react'
import wyoming from '../data/wyoming.js';

class DetailNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeView: this.props.activeView, 
            allViews: [
                {
                    id: 1, 
                    name: 'discover', 
                    linkCl: 'cursor-pointer p-5'
                },
                {
                    id: 2, 
                    name: 'stay', 
                    linkCl: 'cursor-pointer border-solid border-purple border-y-2 p-5'
                },
                {
                    id: 3, 
                    name: 'play', 
                    linkCl: 'cursor-pointer p-5'
                }
            ],
            currentDest: this.props.destName
        }
    }

    handleClick = name => {
        this.setState({ activeView: name })
    }

    render() {
        const { activeView, allViews, currentDest} = this.state
        var destData = wyoming;
        
        if (currentDest === 'Wyoming') {
            destData = wyoming;
        }

        var viewDetails;
        var paragraph1;
        var paragraph2;
        if (this.state.activeView == 'discover') {
            viewDetails = destData.discover;
            paragraph1 = viewDetails.paragraph1
            paragraph2 = viewDetails.paragraph2
        } else if (this.state.activeView == 'stay') {
            viewDetails = destData.stay;
            paragraph1 = viewDetails.paragraph1
            paragraph2 = viewDetails.paragraph2
        } else if (this.state.activeView == 'play') {
            viewDetails = destData.play;
            paragraph1 = viewDetails.paragraph1
            paragraph2 = viewDetails.paragraph2
        }

        return (
            <section className="grid grid-cols-1 md:grid-cols-4 bg-purple">
                <div className="md:col-span-4 text-white p-3">
                    <h2 className="font-sans text-6xl">{destData.headline}</h2>
                </div>
                <nav className="bg-white border-solid border-2 border-purple text-center text-3xl">
                    {allViews.map(view => {
                        return (
                            <div 
                                key={view.id} 
                                className={view.linkCl + (view.name === activeView ? " bg-yellow" : "")}
                                onClick={() => this.handleClick(view.name)}
                                ariaLabel={view.name}
                            >
                                <div className="font-sans">{view.name}</div>
                            </div>
                        )
                    })}
                </nav>
                <div className="col-span-3">
                    <div className="bg-purple text-white border-solid border-purple border-2 p-6 h-full">
                        <p className="font-serif text-l mb-3">{paragraph1}</p>
                        <p className="font-serif text-l">{paragraph2}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default DetailNav