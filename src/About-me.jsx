import Lang_And_Tools from "./Lang-And-Tools";
function AboutMe() {

  return (
    <>
    <section id="about">
      <h1 className="text2 pr-290 text-shadow-2xs text-4xl">About Me</h1>
      <div id="about-me" className="text1 my-5 
          ">
          <div className="flex content ">
              <h1 className="text-2xl ">A bit about me</h1>
              <p className="text-justify pg-about-me">I'm a self-taught web developer and BSIS Student aiming to get experience in 
                designing new features from ideation to production, 
                implementation of wireframes and design flows into high performance 
                software applications. I take into consideration the user experience 
                while writing reusable and efficient code. I passionately combine good 
                design, technology, and innovation in all my projects, which I like to
                 accompany from the first idea to release. 
                 Currently, I'm focused on the backend development and learning 
                 about Supabase and React.</p>
          </div>
      </div>
      <h1 className="text2 pr-240 text-shadow-2xs text-4xl">Technology and Tool Use</h1>
      <div className="text1 tech-no grid  my-5 p-4">
          <div className="block pt-10 pl-18">
              <p className="text-justify">Using a combination of cutting-edge technologies and reliable open-source software I build user-focused,
              websites
                 </p>
                <Lang_And_Tools/>
            
          </div>
      </div>
    </section>
    </>
  
  );
}
export default AboutMe