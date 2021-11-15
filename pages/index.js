import Head from "next/head"
import {signIn, useSession} from "next-auth/react"
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

       {!session && (
         <>
         <button onClick={ ()=> signIn()}> 
         Sign In new buttom
         </button>
         </>
       )} 

       {session && (
          <>
          <h4> You are logged in as: {session.user.name}</h4>
          <h4>Email: {session.user.email}</h4>
          </>
       )}
    </div>
  )
}
