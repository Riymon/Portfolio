function Contact(){

    return(
        <>
        <h1 id="contact" className="text2 text-3xl pr-290">Contact Me</h1>
        <section className="contact-sect">
            <div className="contact flex custom-gradient w-168">
                <form>
                    <h1 className="text-3xl">Send Email</h1>
                    <div className="py-2">
                        <label>Email: </label>
                        <input typeOf="email" className="bg-black w-45 rounded-1xl pl-5 px-1 rounded-2xl" placeholder="ex josemiguel@gmail.com"/>
                    </div>
                    <div className="py-2">

                        <textarea typeOf="text" className="bg-black w-150 h-100 rounded-2xl" placeholder="Message"/>
                    </div>
                    <div>
                        <button className="bg-gradient-to-b from-[#000000] to-[#650313] px-5 py-1">Submit</button>
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}
export default Contact