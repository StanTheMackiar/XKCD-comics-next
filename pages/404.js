import Link from 'next/link'
import React from 'react'
import PageLayout from '../components/Layout/PageLayout'

const Page404 = () => {
  return (
    <PageLayout title='xkcd: Not Found'>
        <h2>Error 404</h2>
        <p><b>Page</b> not found <b>:(</b></p>
        <Link href='/'>
        <a><b>Go to home</b></a>
        </Link>
    </PageLayout>
  )
}

export default Page404