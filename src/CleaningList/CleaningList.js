import './CleaningList.css'
import { Link } from 'react-router-dom'
const CleaningList = () => {
  return(
    <div className='list-section'>
      <section className='list-container'>
        <h4 className='title'>My Clean Home Checklists</h4>
        <div className='line'></div>
        <Link className='daily link'>Daily</Link>
        <Link className='weekly link'>Weekly</Link>
        <Link className='monthly link'>Monthly</Link>
        <Link className='seasonal link'>Seasonal</Link>
        <Link className='annual link'>Annual</Link>
      </section>
    </div>
  )
}
export default CleaningList
