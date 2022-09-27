import React from "react"
import PrimaryNav from "../Navbars/PrimaryNav/PrimaryNav"
import SecondaryNav from "../Navbars/Sidebars/SecondaryNav"

const Dashboard = () => {
  return (
    <>
      <PrimaryNav />
      <div className='flex w-100 flex-grow-1'>
        <SecondaryNav />
      </div>
    </>
  )
}

export default Dashboard
