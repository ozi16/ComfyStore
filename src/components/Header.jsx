import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className=' py-2 bg-neutral text-neutral-content  ' >
            <div className='align-element flex justify-center sm:justify-end gap-6 text-xs sm:text-sm  capitalize'>
                <div className='flex justify-center gap-x-6 items-center  '>
                    <Link to='/login' className='link link-hover' >
                        sig in / guest
                    </Link>
                    <Link to='/register' className='link link-hover'   >create account</Link>
                </div>
            </div>
        </header>
    )
}

export default Header