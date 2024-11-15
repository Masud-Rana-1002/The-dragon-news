
import logo from '../../assets/logo.png'
import moment from 'moment';


const Navbar = () => {

  return (
    <div>
      <div className='flex items-center justify-center py-10 flex-col space-y-3'>
        <img src={logo} alt="" />
        <p className='text-[#706F6F] text-lg'>Journalism Without Fear or Favour</p>
      <p className='text-xl font-semibold text-[#403F3F]'>  {moment().format('dddd, MMMM DD, YYYY')}</p>
      </div>
    </div>
  );
};

export default Navbar;