/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";


// eslint-disable-next-line react-refresh/only-export-components
export const Authcontext = createContext();
const Authprovider = ({ children }) => {
    const [loading, setLoading]= useState(true);
    const [user, setUser] = useState("");
  

    const signUpNewUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        setLoading(true);
       return signInWithPopup(auth,provider);
    }

    const updateUserprofile = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
     };

    const logout = () =>{
        setLoading(true);
      

       return signOut(auth);
    }
    const authInfo ={
        signUpNewUser,
        signInUser,
        googleSignIn,
        logout,
        loading,
        user,
        setUser,
        updateUserprofile

    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setLoading(false);
            setUser(currentUser);
        });
        return () =>{
            unsubscribe();
        };
    },[])
    return (
        <div>
            <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
        </div>
    );
};

export default Authprovider;