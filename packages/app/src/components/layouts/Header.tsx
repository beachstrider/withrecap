import { Menu } from '@headlessui/react'
import { getUserFirstName, toast, useAuth, useAuthGuard } from '@recap/shared'
import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { Button } from '../buttons'

import arrowRight from '../../assets/img/arrowRight.svg'
import danger from '../../assets/img/danger.svg'
import google from '../../assets/img/google.svg'
import logo from '../../assets/img/logo.svg'
import outbound from '../../assets/img/outbound.svg'
import question from '../../assets/img/question.svg'
import { DELETE_ACCOUNT_REQUEST, SUPPORT_REQUEST } from '../../constants/links'
import { INTEGRATIONS, MEETINGS } from '../../constants/routes'

export default function Index({ isPublic = false }) {
  return (
    <header className="container py-[18px]">
      <div className="flex justify-between">
        <Link className="flex gap-[10px] items-center" to="/">
          <img src={logo} alt="" />
          <div className="text-[18px] font-bold">Recap</div>
        </Link>
        {isPublic ? <PublicSection /> : <PrivateSection />}
      </div>
    </header>
  )
}

const PrivateSection = () => {
  const { user, logout, error } = useAuthGuard()

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  // TODO: Re-enable once we support auto-sharing
  // const userStore = useMemo(() => new UserStore(), [])
  // const [automaticSharing, setAutomaticSharing] = useState(false)
  // useEffect(() => {
  //   userStore.get(user.uid).then((u) => {
  //     if (u.autoSharing) {
  //       setAutomaticSharing(true)
  //     }
  //   })
  // }, [userStore, user.uid])
  // const toggleAutoSharing = async () => {
  //   setAutomaticSharing(!automaticSharing)

  //   await userStore.update(user.uid, { autoSharing: !automaticSharing })
  // }

  return (
    <>
      <div className="sm:flex hidden items-center gap-[18px]">
        <NavLink to={MEETINGS}>
          {({ isActive }) => (
            <Button className={isActive ? '' : 'bg-white font-semibold text-gray-500'}>Past Meetings</Button>
          )}
        </NavLink>
        <NavLink to={INTEGRATIONS}>
          {({ isActive }) => (
            <Button className={isActive ? '' : 'bg-white font-semibold text-gray-500'}>Integrations</Button>
          )}
        </NavLink>
      </div>
      <div className="relative">
        <Menu>
          <Menu.Button className="flex items-center gap-[10px]">
            <img src={`${user.photoURL}`} alt="" className="w-[32px] h-[32px] rounded-full" />
            <div className="font-semibold rounded-full">{getUserFirstName(user)}</div>
          </Menu.Button>
          <Menu.Items className="z-[1000] absolute flex flex-col mt-[28px] menu-shadow p-[20px] w-[300px] right-0 text-[13px] bg-white sm:rounded-[20px] rounded-[15px]">
            {/* <div className="mb-[20px]">
              <div className="flex justify-between items-center mb-[8px]">
                <div className="flex gap-[10px] grow">
                  <img src={paperPlan} alt="" className="w-[20px] h-[20px]" />
                  <div className="font-semibold text-[15px]">Automatic Sharing</div>
                </div>
                <div>
                  <Switch checked={automaticSharing} onClick={toggleAutoSharing} />
                </div>
              </div>
              <div className="text-gray-500">
                Recap will automatically send meeting notes to all participants after each meeting.
              </div>
            </div> */}
            <div className="mb-[20px]">
              <Link target="_blank" to={SUPPORT_REQUEST} className="flex items-center justify-between">
                <div className="flex gap-[10px] grow">
                  <img src={question} alt="" className="w-[20px] h-[20px]" />
                  <div className="font-semibold text-[15px]">Support</div>
                </div>
                <img src={outbound} alt="" />
              </Link>
            </div>
            <div className="mb-[20px]">
              <div
                onClick={async () => {
                  await logout()

                  window.location.href = '/'
                }}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex gap-[10px] grow">
                  <img src={arrowRight} alt="" className="w-[20px] h-[20px]" />
                  <div className="font-semibold text-[15px]">Sign Out</div>
                </div>
                <img src={outbound} alt="" />
              </div>
            </div>
            <div className="flex w-full mb-[20px] border-t border-solid border-gray-100"></div>
            <div className="">
              <Link target="_blank" to={DELETE_ACCOUNT_REQUEST} className="flex items-center justify-between">
                <div className="flex gap-[10px] grow">
                  <img src={danger} alt="" className="w-[20px] h-[20px]" />
                  <div className="font-semibold text-[15px] text-[#F12858]">Delete Account</div>
                </div>
              </Link>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </>
  )
}

const PublicSection = () => {
  const { onAuthStateChanged, loginWithPopup, error } = useAuth()
  const navigate = useNavigate()

  const login = async () => {
    try {
      await loginWithPopup?.()
    } catch (error) {
      toast.error('An error occurred during login', error)
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error.message, error.err)
    }
  }, [error])

  useEffect(() => {
    // If user already logged in we redirect to meetings page
    const unsubscribe = onAuthStateChanged((u: any) => {
      if (u !== null) {
        navigate(MEETINGS)
      }
    })

    return unsubscribe
  }, [navigate, onAuthStateChanged])

  return (
    <div className="flex items-center sm:gap-[20px] gap-[15px]">
      <button onClick={login} className="text-[15px] font-semibold text-gray-500">
        Sign in
      </button>
      <a href={process.env.CHROME_WEBSTORE_LINK} target="_blank" rel="noreferrer">
        <Button>
          <img src={google} alt="" />
          Add to Chrome
        </Button>
      </a>
    </div>
  )
}
