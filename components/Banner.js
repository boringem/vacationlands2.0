function Banner(props) {
    return (
        <header className="grid grid-col-2">
            <div className="col-span-1 w-1/4">
                <h2 className="font-decor text-purple text-4xl">Vacationlands</h2>
                <div className="bg-yellow p-4 font-sans text-6xl">{props.dest}</div>
            </div>
        </header>
    )
}

export default Banner;