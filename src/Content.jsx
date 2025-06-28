import mcwd from './images/mcwd.png'
import mclinic from './images/mclinic.png'
import task from './images/task.png'
import guilibms from './images/guilibms.png'

function Content(content) {
  let arr = [];
   if(content.title == 'Projects'){
     arr = [
        {id:1, h: 'Medical Clinic Appointment System', img: mclinic,
           p: 'Group final project for Second Year, Second Semester implementing Database System Development Cycle and Database Analysis. The original version used PHP via XAMPP and MySQL. This version utilizes Supabase.', 
          a: 'https://riymon.github.io/MedClinicAppointmentSystem/'},
        {id:2, h: 'MCWD Calculator Simulator', img: mcwd, 
          p: 'Originally a C programming language console application (First Year, First Semester individual project). Improved version with GUI using HTML, JavaScript, CSS, and PHP via XAMPP with MySQL database and CRUD functionalities.',
          a: 'https://riymon.github.io/MCWD/'},
        {id:3, h: 'Task Management System', img: task, 
          p: 'Group final project for Web Development Subject (Second Year, Second Semester).',
          a: 'https://task-manager-six-xi-98.vercel.app/'},
        {id:4, h: 'Library Management System', img: guilibms, 
          p: 'Solo project inspired by Second Year, First Semester final group project. Enhanced version with GUI using Java.', 
          a: 'https://github.com/Riymon/GUI-Library-Management-System'},
      ];
  }
  else if(content.title == 'My Services' ) {
    arr = [
      {id:1, h: 'Web Development', p: 'HTML'},
      {id:2, h: 'Database System Development Cycle and Database Analysis.', p: 'HTML'},
      {id:3, h: 'Test', p: 'HTML'}
    ]
  } 
  return (
    <>
    <h1 id={content.tag} className="text2 pr-290 text-shadow-2xs text-4xl">{content.title}</h1>
    <div className="cons text1 grid grid-cols-3 gap-4 h-auto my-2 p-5 ">
        {arr.map((arrs) => (
          <div key={arrs.id} className="subcontent content custom-gradient  hover:animate-fadeInUp hover:bg-[#8f091f] rounded-2xl ">
            <h1 className="text-2xl pb-1">{arrs.h}</h1>
            {content.title === 'Projects' && (
              <img className="h-42" src={arrs.img} alt={arrs.h} />
            )}
            {content.title === 'Projects' && (<p className='text-justify pt-3 '>{arrs.p}</p>)}
            {content.title === 'Projects' && (<a target="_blank" className="px-40 py-1 hover:shadow-5xl hover:text-[#8f091f] hover:shadow-[#08d2b0] bg-black rounded-1xl " href={arrs.a}>Visit</a>)}
            {content.title === 'My Services' && (<p>{arrs.p}</p>)}
          </div>
        ))}
    </div>
    </>

  );
}
export default Content