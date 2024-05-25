import { GoPerson } from 'react-icons/go'
import Link from 'next/link'
import CartPage from './Cart'
import CartIcon from '../cart/CartIcon'
import { getSession } from '../actions'
import { SessionData } from '../lib'

export default async function Navbar() {
  const session: SessionData = await getSession()

  return (
    <div>
      <nav className="flex fixed bg-[#fafafa] top-0 left-0 right-0 z-40 w-full justify-center">
        <div className="w-full rounded-lg m-5 mx-6 md:w-[1320px]">
          <div className="flex w-full h-full justify-between items-center flex-wrap content-center">
            <div className="flex items-center justify-between lg:w-[320px]">
              <Link href="/" className="text-2xl font-bold font-fira">
                CozaStore
              </Link>
              <div className="lg:flex hidden justify-between md:w-[150px]">
                <Link type="link" href="/">
                  <span className="text-md btn btn-ghost">Home</span>
                </Link>
                <Link type="link" href="/category">
                  <span className="text-md btn btn-ghost">Category</span>
                </Link>
              </div>
            </div>
            <div className="flex gap-4 justify-between items-center md:w-fit content-center w-fit">
              {/* <button
                type="button"
                name="search"
                onClick={() => setShowSearch(!showSearch)}
              >
                <BsSearch />
              </button> */}
              <Link
                href={session.isLoggedIn && session.username ? '/' : '/login'}
                className="hidden bg-gradient-to-tr from-[#FFB777] to-[#F16C6A] px-4 py-2 rounded-full md:flex md:items-center gap-2"
              >
                <GoPerson size={20} />
                {session.isLoggedIn && session.username ? (
                  <span className="text-md">{session.username}</span>
                ) : (
                  'Get Started'
                )}
              </Link>
              <div className="lg:hidden flex drawer drawer-end w-fit">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label
                    htmlFor="my-drawer-4"
                    className="drawer-button btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </label>
                </div>
                <div className="drawer-side z-20">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="menu p-4 w-[16rem] min-h-full bg-base-200 text-base-content">
                    <NavMenu session={session} />
                  </div>
                </div>
              </div>

              {/* another drawer */}
              <div className="drawer drawer-end h-fit relative z-0 w-fit">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content z-0">
                  <label
                    htmlFor="my-drawer"
                    className="drawer-button btn px-6 rounded-full"
                  >
                    <CartIcon userId={session.userId} />
                  </label>
                </div>
                <div className="drawer-side z-20">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="menu p-4 w-full max-w-[380px] h-fit text-base-content">
                    <CartPage userId={session.userId} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

const NavMenu = ({ session }: any) => {
  return (
    <div className="mt-[3rem] gap-3 flex h-full flex-col">
      <div className="text-2xl font-bold">CozaStore</div>
      <Link role="button" href="/">
        <span className="font-medium text-2xl">Home</span>
      </Link>

      <Link role="button" href="/category">
        <span className="font-medium text-2xl">Category</span>
      </Link>

      <Link role="button" href="/cart">
        <span className="font-medium text-2xl">Cart</span>
      </Link>
      <Link
        href={session.isLoggedIn && session.username ? '/' : '/login'}
        className="bg-gradient-to-tr w-fit from-[#FFB777] to-[#F16C6A] px-4 py-2 rounded-full flex items-center gap-2"
      >
        <GoPerson size={20} />
        {session.isLoggedIn && session.username ? (
          <span className="text-md">{session.username}</span>
        ) : (
          'Get Started'
        )}
      </Link>
    </div>
  )
}
