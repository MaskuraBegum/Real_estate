import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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

    const createUser = (email,password) =>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singIn = (email,password) =>{
        
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin =() =>{
       
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin =() =>{
        
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
         setLoder,
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