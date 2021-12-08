import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Footer from './footer'

type Props = {
  children?: ReactNode
  title?: string
  desc?: string
}

const Layout = ({ children, title = 'This is the default title', desc = "This is the default description" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={desc} />
    </Head>
    <Header/>
    {children}
    <Footer/>
  </div>
)

export default Layout
