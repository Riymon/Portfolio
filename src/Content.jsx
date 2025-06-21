function Content() {

  const arr = [
    {id:1, h: 'HTML', p: 'HTML'},
    {id:2, h: 'HTML', p: 'HTML'},
    {id:3, h: 'HTML', p: 'HTML'}
  ];
  return (
    <>
    <h1 id="services" className="text2 pr-290 text-shadow-2xs text-4xl">My Services</h1>
    <div className="text1 grid grid-cols-3 gap-4 h-auto my-5 p-4">
        {arr.map((arrs) => (
          <div key={arrs.id} className="content custom-gradient">
            <h1 className="text-2xl">{arrs.h}</h1>
            <p>{arrs.p}</p>
          </div>
        ))}
    </div>
    </>

  );
}
export default Content;
