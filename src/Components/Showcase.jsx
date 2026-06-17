const Showcase = (() => {
    return(
        <section id="Showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src = "/mask-logo.svg" />
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        {/* This will make sure it dosent go out of the screen and only takes max width*/}
                        <h2>Rocket Chip</h2>

                        <div classname="spcae-y-5 mt-7 pe-10">
                            <p>
                                Introducting{" "}
                                <span className="text-white">
                                    M4, the next generation of Apple Silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
})
export default Showcase;