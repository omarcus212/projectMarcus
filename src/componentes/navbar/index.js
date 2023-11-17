import { Link, Route, useNavigate } from 'react-router-dom';



const Navbar  = ({text}) => {
  return (
    <span className='Navbar'>{text}</span>
  );
}

export default Navbar;
