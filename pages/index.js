import Head from "next/head"
import {signIn, signOut, useSession} from "next-auth/react"
import Header from "../components/Header"
import Feed from "../components/Feed"
import MiniProfile from "../components/MiniProfile"


export default function Home() {

  const {session, loadingSession} = useSession();
  

  if (loadingSession){
    return <p>Loading...</p>
  }
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
       <MiniProfile />

    </div>
  )
}
