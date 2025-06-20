function Content() {
  return (
    <>
    <h1 className="text2 pr-250 text-shadow-2xs text-4xl">My Services</h1>
    <div className="text1 grid grid-cols-3 gap-4 h-[50vh] my-5 p-4">
        <div className="content">
            <h1 className="text-2xl ">HTML & CSS</h1>
            <p>Another short description can go here.</p>
        </div>
      
      <div className="content">
        <h2 className="text-2xl">2nd head</h2>
        <p>Another short description can go here.</p>
      </div>

      <div className="content">
        <h2 className="text-2xl">3rd head</h2>
        <p>This fills out the third column with more info.</p>
      </div>
    </div>
    </>

  );
}
export default Content;
