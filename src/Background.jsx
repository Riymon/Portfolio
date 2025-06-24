import test from './images/test.png';
function Background(){

    return(
        <section id="back-sec" className="relative w-full h-[68vh] bg-gradient-to-b from-[#000000] to-[#8f091f] overflow-hidden animate-fadeInUp">
            {/* Background Curved Shape */}
            <div className="absolute bottom-0 w-full h-[10vh] bg-gradient-to-t from-[#000000] rounded-t-[0%] opacity-90 delay-5"></div>

            <div className="background">
                <div className="backg-picture">
                    <img src={test} alt="my picture" class="back-img"/>
                </div>
                <div className="text pl-50 pt-40">
                    <h1 className='typewriter-text animate-fadeInUp'>HI IM RIYMON ARONG!</h1>
                    <p className='text-5xl animate-float-slow duration-75'>FRONT END & BACK END
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Background