const Showcase = (() => {
    return(
        <section id="Showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src = "/mask-logo.svg" />
                </div>
            </div>
        </section>
    )
})
export default Showcase;