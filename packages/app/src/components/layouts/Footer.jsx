import { Link } from 'react-router-dom'
import google from '../../assets/img/google.png'
import logo from '../../assets/img/logo.svg'
import Badge from '../display/Badge'

export default function Index({ className = '' }) {
  return (
    <footer className={`container py-[100px] ${className}`}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link className="flex gap-[10px] " to="/">
            <img src={logo} alt="" />
            <div className="text-[18px] font-bold">Recap</div>
          </Link>
          <div className="ml-[42px] text-[15px] text-gray-500">© 2023 Recap Labs, Inc.</div>
        </div>
        <div className="flex items-center sm:gap-[20px] gap-[15px]">
          <Link to="/signin" className="text-[15px] font-semibold text-gray-500">
            Terms and Conditions
          </Link>
          <Link to="/signin" className="text-[15px] font-semibold text-gray-500">
            Privacy
          </Link>
          <Link to="/signin" className="text-[15px] font-semibold text-gray-500">
            Sign in
          </Link>
          <Link to="#" className="ml-[20px]">
            <Badge>
              <img src={google} alt="" />
              Add to Chrome
            </Badge>
          </Link>
        </div>
      </div>
    </footer>
  )
}
