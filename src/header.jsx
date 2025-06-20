function Header(){
    return(
    <section>
        <header>
            <div className='header py-1 grid grid-cols-2 gap-3 grid-rows-none my-5'>
                <div className="logo-name">
                    <h1 className=''>Riymon</h1>
                </div>
                <div className="right-header">
                    <ul>
                        <li>
                            <label>+0(954) 520-7076</label>
                            <label><a href="">About Me</a></label>
                            <button className="book-now">Projects</button>
                        </li>
                    </ul>
                </div>
            </div>
            </header>
    </section>
    );

}
export default Header