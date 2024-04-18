import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";



export const ProviderContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const Provider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loder,setLoder] = useState(true)
    const [another,setanother] = useState(false)
    const [show, setshow] = useState(false)

    const createUser = (email,password) =>{
        setLoder(true)
        setanother(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (name,image) =>{
        setLoder(true)
        setanother(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL: image
        })
    }

    const singIn = (email,password) =>{
        setLoder(true)
        setanother(true)
        setanother(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin =() =>{
       setLoder(false)
       setanother(true)
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin =() =>{
        setLoder(true)
        setanother(true)
        return signInWithPopup(auth,githubProvider)
    }
    const logOut =()=>{
        
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
                setLoder(false);
                setanother(true);
            }
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authvalue ={
         createUser,
         user,
         setUser,
         singIn,
         googleLogin,
         githubLogin,
         logOut,
         loder,
         another,
         show,
         setshow,
         setanother,
         setLoder,
         updateUserProfile
    }
    return (
        <div>
            <ProviderContext.Provider value={authvalue}>
                {children}
            </ProviderContext.Provider>
        </div>
    );
};

export default Provider;