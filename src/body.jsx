import test from './images/test.png';
function Body(){

    return(
        <section className="relative w-full h-screen bg-gradient-to-b from-[#000000] to-[#8f091f] overflow-hidden">
            {/* Background Curved Shape */}
            <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-[#000000] rounded-t-[0%] opacity-90"></div>

            {/* Foreground Content */}
        <div className="relative z-10 text-white px-8 pt-24"> </div>
            <div className="background relative w-full h-150 bg-black-500 overflow-hidden">
                <div className="car-picture">
                    <img src={test} alt="my picture" class="back-img"/>
                </div>
                <div className="text pl-50 pt-40">
                    <h1>HI IM RIYMON ARONG!</h1>
                    <p className='text-5xl'>FRONT END & BACK END
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Body