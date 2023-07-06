// // For initializing the app
// import {  useNavigate} from "react-router-dom"; 
// import { useDispatch} from "react-redux" ; 
// import {addUser} from "../redux/bazarSlice";
// import { ToastContainer , toast }  from "react-toastify" ; 
// import { githublogo , googlelogo } from '../assets';
// import firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';



// // For authentication
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// // Initialize Firebase
// const firebaseConfig = {
//   // Your Firebase configuration
//   apiKey: "AIzaSyA32sxM27KVPZiw6BZFdt1KC5yQapVHh3c",
//   authDomain: "bazarapp-337ec.firebaseapp.com",
//   projectId: "bazarapp-337ec",
//   storageBucket: "bazarapp-337ec.appspot.com",
//   messagingSenderId: "890839756969",
//   appId: "1:890839756969:web:f34161a9f7196a456bf9b8"
// };

// const Login2 = () => {
//   const dispatch = useDispatch(); 
//   const navigate = useNavigate();
//   const app = firebase.initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const provider = new GoogleAuthProvider();

//   const handleGoogleLogin =(e)=> {
//     e.preventDefault() ; 

// signInWithPopup(auth, provider).then((result) => {
//     // Handle sign-in success

//     const user = result.user ; 
//       dispatch(addUser({
//         _id: user.uid,
//         name: user.displayName,
//         email: user.email,
//         image:user.photoURL,
//       }));
//       setTimeout(()=> {navigate("/"); }, 1500);

//   }).catch((error) => {
//     // Handle sign-in error
//       console.log(error) ; 

//   });

// };

// const handleSignOut = () => {
// signOut(auth).then(() => {
//     // Handle sign-out success
//       toast.success("Log Out Successfully");

//   })
//   .catch((error) => {
//     // Handle sign-out error
//       console.log(error);

//   });

// };

//   return (
//         <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
//           <div className="w-full flex items-center justify-center gap-10">
//            <div onClick ={handleGoogleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
//            <img className="w-8" src={googlelogo} alt=""/> 
//             <span className="text-sm text-gray-900">sign in with google</span>
//            </div>
//            <button onClick = {handleSignOut } className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"> sign out</button>
//           </div>
//           <div className="w-full flex items-center justify-center gap-10">
//            <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
//            <img className="w-8" src={githublogo} alt=""/> 
//             <span className="text-sm text-gray-900">sign in with github</span>
//            </div>
//            <button  className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"> sign out</button>
//           </div>
        
//         <ToastContainer 
//         position = "top-left"
//         autoClose ={2000} 
//         hideProgressBar = {false} 
//         newestOnTop={ false} 
//         closeOnClick
//          rtl = {false } 
//          pauseOnFocusLoss 
//          draggable 
//          pauseOnHover 
//          theme = "dark"
//          /> 
//          </div> 
//       )
//   }
    
// export default Login2;
    