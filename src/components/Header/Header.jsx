
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='' >
            <Link className='text-2xl mr-6' to='/'>Home </Link>
            <Link className='text-2xl' to='/login'>LogIn</Link>
        </div>
    );
};

export default Header;