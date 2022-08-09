// import {
//     createUserWithEmailAndPassword,
//     getAuth,
//     signInWithEmailAndPassword,
//     signOut,
//     updateProfile
// } from 'firebase/auth';

// const useFirebase = () => {
//     const profileUpdate = (name) => {
//         updateProfile(getAuth().currentUser, { displayName: name }).catch((err) =>
//             alert(err.message)
//         );
//     };

//     const createUser = (name, email, password) =>
//         createUserWithEmailAndPassword(getAuth(), email, password).then(() => {
//             profileUpdate(name);
//         });

//     const login = (email, password) => signInWithEmailAndPassword(getAuth(), email, password);

//     const logout = () => signOut(getAuth());

//     return { createUser, login, logout };
// };

// export default useFirebase;

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import initializeAuthentication from '../firebase/firebase.init';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const navigate = useNavigate();

    // Observer user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
            // setIsLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);

    // sign up functionality
    const signUp = (name, email, password, image) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image,
                }).then(() => {
                    swal('Good job!', 'Account has been created!', 'success');
                    navigate('/');
                });
            })
            .catch((err) =>
                swal(
                    'Something went wrong!',
                    `You already have an account this email ${email} Please log in `,
                    'error'
                )
            );
        // .catch((err) => swal('Something went wrong!', `${err.message}`, 'error'));
    };

    // login or sign in functionality
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
                swal('Sign in Successful!', 'Welcome back !', 'success');
                navigate('/');
            })
            .catch((err) => swal('Something went wrong!', `${err.message}`, 'error'));
    };

    // google sign in
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                setUser(res.user);
                swal('Good job!', 'Account has been created!', 'success');
                navigate('/');
            })
            .catch((err) => console.log(err.message));
    };

    // logout or sign out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                swal('Logout Successful!', 'You are logged out!', 'success');
                navigate('/');
            })
            .catch((err) => {
                swal('Something went wrong!', `${err.message}`, 'error');
            });
    };

    return {
        user,
        signUp,
        login,
        logOut,
        signInWithGoogle,
    };
};

export default useFirebase;
