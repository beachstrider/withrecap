import { Link } from 'react-router-dom'
import google from '../../assets/img/google.png'
import logo from '../../assets/img/logo.svg'
import user from '../../assets/img/profile-user.png'
import Badge from '../display/Badge'

export default function Index({ isPublic = false }) {
  return (
    <header className="container py-[18px]">
      <div className="flex justify-between">
        <Link className="flex gap-[10px] items-center" to="/">
          <img src={logo} alt="" />
          <div className="text-[18px] font-bold">Recap</div>
        </Link>
        {!isPublic && (
          <>
            <div className="flex items-center gap-[18px]">
              <Badge>Past Meetings</Badge>
              <div className="px-[10px] py-[6px] font-semibold text-gray-500">Integrations</div>
            </div>
            <Link to="#" className="flex items-center gap-[10px]">
              <img src={user} alt="" className="w-[32px] h-[32px]" />
              <div className="font-semibold rounded-full">Maxwell</div>
            </Link>
          </>
        )}
        {isPublic && (
          <div className="flex items-center sm:gap-[20px] gap-[15px]">
            <Link to="/signin" className="text-[15px] font-semibold text-gray-500">
              Sign in
            </Link>
            <Link to="#">
              <Badge>
                <img src={google} alt="" />
                Add to Chrome
              </Badge>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
