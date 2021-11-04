import Head from "next/head"
import Header from "../components/Header"
import Feed from "../components/Feed"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Insta2 Lilliana Lee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       {/*Header*/}
       <Header />

       {/*Feed*/}
       <Feed />

       {/*Modal*/}

      
    </div>
  )
}
