import test from './images/test.png';
import facebook from './logo/facebook.png';
import github from './logo/github.png';
import discord from './logo/discord.png'

function Background(){

    return(
        <section id="back-sec" className="relative w-auto h-[68vh] bg-gradient-to-b from-[#000000]
         to-[#8f091f] overflow-hidden animate-fadeInUp motion-safe:animate-fadeInUp">
            <div className="absolute bottom-0 w-full h-[10vh] bg-gradient-to-t from-[#000000] rounded-t-[0%] opacity-90 delay-5"></div>
            <div className="background">
                <div className="backg-picture">
                    <img src={test} alt="my picture" class="back-img"/>
                </div>
                <div className="text pl-50 pt-40">
                    <h1 className='typewriter-text animate-fadeInUp'>HI IM RIYMON ARONG!</h1>
                    <p className='text-5xl animate-float-slow duration-75'>FRONT END & BACK END
                    </p>
                    <div className='absolute bg-transparent-300 right-10 top-40'>
                        <ul>
                            <li><a href="https://www.facebook.com/riymon.arong" target='_blank'><img type="icon" src={facebook} title="facebook icon" className='w-10 h-10'></img></a></li>
                            <li><a href="https://github.com/Riymon" target='_blank'><img type="icon" src={github} title="github icon" className='w-10 h-10'></img></a></li>
                            <li><a href="https://discord.com/channels/@320506336553074690"><img type="icon" src={discord} title="github icon" className='w-10 h-10'></img></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Background