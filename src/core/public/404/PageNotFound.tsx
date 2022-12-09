import React from "react"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <section className='bg-white dark:bg-gray-900 h-full'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-full flex flex-column items-center'>
        <div className='mx-auto max-w-screen-sm text-center'>
        <h5 className='text-center text-xl font-bold tracking-tight text-gray-900'>
            Ascend<span className='text-red-600'>Dex</span>
          </h5>
          <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500'>
            404
          </h1>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
            Something&apos;s missing.
          </p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.{" "}
          </p>
          <div className='flex justify-center w-full  text-center'>
            <Link
              to={"/"}
              className='group relative flex w-fit justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound
