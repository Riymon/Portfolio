import test from './images/test.png';
function Body(){

    return(
        <section>
            <div className="background relative w-full h-150 bg-black-500 overflow-hidden">
                <div className="car-picture">
                    <img src={test} alt="my picture" class="back-img"/>
                </div>
                <div className="text">
                    <h1>HI IM RIYMON ARONG!</h1>
                    <p>Experience our luxury driving services for you in-town commute even or 
                        group gathering
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Body