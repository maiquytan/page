// import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Head from 'next/head';
import Link from 'next/link';

const Index = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title></title>
        <meta data-n-head="ssr" data-hid="title" name="title"
          content="" />
        <meta data-n-head="ssr" data-hid="og:title" name="og:title"
          content="" />
        <meta data-n-head="ssr" data-hid="description" name="description" content=""/>
        <meta data-n-head="ssr" data-hid="og:description" name="og:description" content=""/>
        <meta data-n-head="ssr" data-hid="og:url" name="og:url"
          content="" />
        <meta data-n-head="ssr" name="keywords"
          content="" />
        <meta data-n-head="ssr" data-hid="og:image" property="og:image"
          content="" />
        <meta data-n-head="ssr" data-hid="robots" name="robots" content="" />
        <meta data-n-head="ssr" data-hid="googlebot" name="googlebot" content="" />
        <link data-n-head="ssr" data-hid="i18n-can" rel="canonical" href="" ></link>
      </Head>
      <div className="container">
        {/* Home page */}
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

export default Index
