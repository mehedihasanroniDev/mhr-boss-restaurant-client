import { createContext, useEffect, useState } from "react" ;
import { GithubAuthProvider,  GoogleAuthProvider , createUserWithEmailAndPassword,   onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Configs/firebase.config" ;
import useAxiosPublic from "../Hooks/useAxiosPublic" ;

export const AuthContext = createContext() ;

const googleProvider =new GoogleAuthProvider()
const githubProvider =new GithubAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    const googleLogin =()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const gitHubLogin = ()=>{
        return signInWithPopup(auth, githubProvider)
    }
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser?.emailVerified){
                console.log('curent user_',currentUser);
                setUser(currentUser);
                if (currentUser) {
                    // get token and store client
                    const userInfo = { email: currentUser.email };
                    axiosPublic.post('/jwt', userInfo)
                        .then(res => {
                            if (res.data.token) {
                                localStorage.setItem('access-token', res.data.token);
                                setLoading(false);
                            }
                        })
                }
                else {
                    localStorage.removeItem('access-token');
                    setLoading(false);
                }
            }
            setLoading(false);

        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        resetPassword,
        googleLogin,
        gitHubLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
