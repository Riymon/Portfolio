import html from './logo/html.png';
import css from './logo/css.png'
import javascript from './logo/javascript.png'
import supabase from './logo/supabase.png'
import mysql from './logo/mysql.png'
import react from './logo/react.jpg'
import tailwindcss from './logo/tailwindcss.png';

function Lang_And_Tools() {

  const technology = [
    { id: 1, img: html, p: 'HTML' },
    { id: 2, img: css, p: 'CSS' },
    { id: 3, img: javascript, p: 'JavaScript' },
    { id: 4, img: supabase, p: 'Supabase' },
    { id: 5, img: mysql, p: 'MySQL' },
    { id: 6, img: react, p: 'React' },
    { id: 7, img: tailwindcss, p: 'Tailwind' }
    
  ];


  return (
    <div
      className=" par flex pt-2 min-w-4xl min-h-3"
    >
      {technology.map((tech) => (
        <div key={tech.id} className="flex tech text-white px-5 pt-2 max-w-3.9">
          <img src={tech.img} alt={tech.p} className="w-14 h-14 mx-auto" />
          <p className='pt-4 pl-1.5'>{tech.p}</p>
        </div>
      ))}
    </div>
  );
}

export default Lang_And_Tools