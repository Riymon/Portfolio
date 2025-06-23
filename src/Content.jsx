import mcwd from './images/mcwd.png'
import mclinic from './images/mclinic.png'
import task from './images/task.png'

function Content(content) {
  let arr = [];
   if(content.title == 'Projects'){
     arr = [
        {id:1, h: 'MCWD Calculator Simulator', img: mcwd, p: 'TEST', a: 'https://riymon.github.io/MCWD/'},
        {id:2, h: 'Medical Clinic Appointment System', img: mclinic, p: 'TEST', a: 'https://riymon.github.io/MedClinicAppointmentSystem/'},
        {id:3, h: 'Task Management System', img: task, p: 'TEST', a: 'https://task-manager-six-xi-98.vercel.app/'},
    ];
  }
  else if(content.title == 'My Services' ) {
    arr = [
      {id:1, h: 'HTML', p: 'HTML'},
      {id:2, h: 'HTML', p: 'HTML'},
      {id:3, h: 'HTML', p: 'HTML'}
    ]
  } 
  return (
    <>
    <h1 id={content.tag} className="text2 pr-290 text-shadow-2xs text-4xl">{content.title}</h1>
    <div className="text1 grid grid-cols-3 gap-4 h-auto my-2 p-5">
        {arr.map((arrs) => (
          <div key={arrs.id} className="content custom-gradient">
            <h1 className="text-2xl pb-1">{arrs.h}</h1>
            {content.title === 'Projects' && (
              <img className="h-42" src={arrs.img} alt={arrs.h} />
            )}
            <a className='' target='_blank' href={arrs.a}>{arrs.p}</a>
          </div>
        ))}
    </div>
    </>

  );
}
export default Content;
