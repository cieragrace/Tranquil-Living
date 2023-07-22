import './CleaningList.css'
import { Link } from 'react-router-dom'
const CleaningList = () => {
  return(
    <div className='list-section'>
      <section className='list-container'>
        <h4 className='title'>My Clean Home Checklists</h4>
        <div className='line'></div>
        <Link className='daily link' to={'/daily-tasks'}>Daily</Link>
        <Link className='weekly link' to={'/weekly-tasks'}>Weekly</Link>
        <Link className='monthly link' to='/monthly-tasks'>Monthly</Link>
        <Link className='seasonal link' to={'/seasonal-tasks'}>Seasonal</Link>
        <Link className='annual link' to={'/annual-tasks'}>Annual</Link>
      </section>
    </div>
  )
}
export default CleaningList
