import test from './images/test.png';
function Lang_And_Tools() {

  const technology = [
    { id: 1, img: test, p: 'HTML' },
    { id: 2, img: test, p: 'JavaScript' },
    { id: 3, img: test, p: 'SupaBase' }
  ];


  return (
    <div
      className="flex pt-2"
    >
      {technology.map((tech) => (
        <div key={tech.id} className="flex tech text-white px-5">
          <img src={tech.img} alt={tech.p} className="w-16 h-16 mx-auto" />
          <p className='pt-5'>{tech.p}</p>
        </div>
      ))}
    </div>
  );
}

export default Lang_And_Tools;
