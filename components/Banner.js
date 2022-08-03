function Banner(props) {
    return (
        <header className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:col-span-1 md:w-1/2">
                <h2 className="font-decor text-purple text-4xl">Vacationlands</h2>
                <div className="bg-yellow p-4 font-sans text-6xl">{props.dest}</div>
            </div>
        </header>
    )
}

export default Banner;