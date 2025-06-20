import test from './images/test.png';
function Body(){

    return(
        <section className="relative w-100% h-50% bg-gradient-to-br from-[#181818] to-[#8f091f] overflow-hidden">
    {/* Curved Background Shape */}
    <div className="absolute -top-10 left-0 w-full h-1/2 bg-[#0c0c0c] rounded-b-[50%] blur-sm opacity-90"></div>

    {/* Accent Shape */}
    <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-[#1c1b1b] rounded-tl-[100%] blur-md opacity-70 rotate-15"></div>
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