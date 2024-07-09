import React ,{useEffect , useState} from 'react'
import { onAuthStateChanged ,signOut } from 'firebase/auth'
import auth from '../firebase'

const AuthDeitails = () => {
    const [authuser, setauthuser] = useState(null)
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setauthuser(user)
            }
            else {
                setauthuser(null)
                }
            })
            return () => listen()
            }, [])

          const UserSingOut = () => {
            signOut(auth)
            .then(() => {
                console.log("User SignOut")
                }).catch((error) => {console.log(error)});
          };
  return (
    <div>
        {authuser ? (
            <>
            <p className='authh'>{`Hello ${authuser.email}`}</p>
            <button className='btn-o' onClick={() => UserSingOut(auth)}>Sign Out</button>
            </>
            ) : (
                <p className='authh'>Please Sign In</p>
                )
                }
                </div>
        )} 
export default AuthDeitails