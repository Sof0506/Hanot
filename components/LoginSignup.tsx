import { getAuth, onAuthStateChanged,updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { app, auth, db } from "..//firebase";
import { useState } from "react";

const SignUpForm = () => {
  const [role, setRole] = useState("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      // Create the user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add the user data to Firestore
      const userData = {
        firstName,
        lastName,
        email,
        role,
        uid: user.uid,
      };
      await addDoc(collection(db, "users"), userData);

      // Update the user's display name
      await updateProfile(user, { displayName: `${firstName} ${lastName}` });


      // Add custom claims to the user based on their role
      const customClaims = {};
      if (role === "partner") {
        customClaims.partner = true;
      }
      await user.getIdToken(true);
      setSuccessMessage("Successfully signed up!");
  
      // Reset the form
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setRole("client");

      // Redirect the user to the home page
      window.location.href = "/";
    } catch (error) {
      setError(error.message);
    }
  };
  
  
  return (
    <div className="max-w-sm mx-auto px-6 py-8 bg-gray-800 h-[500px] rounded-lg shadow-lg landscape:w-3/4">
      <h1 className="text-2xl font-semibold text-white mb-8">Sign Up</h1>
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
  <div className="flex space-x-4">
    <div className="relative w-1/2">
      <label htmlFor="firstName" className="block font-medium text-white mb-1">
        First Name
      </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        required
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        className="w-full bg-gray-700 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white px-3 py-2"
      />
    </div>
    <div className="relative w-1/2">
      <label htmlFor="lastName" className="block font-medium text-white mb-1">
        Last Name
      </label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        required
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        className="w-full bg-gray-700 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white px-3 py-2"
      />
    </div>
  </div>
  <div className="flex space-x-4">
    <div className="relative w-1/2">
      <label htmlFor="email" className="block font-medium text-white mb-1">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="w-full bg-gray-700 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white px-3 py-2"
      />
    </div>
    <div className="relative w-1/2">
      <label htmlFor="password" className="block font-medium text-white mb-1">
        Password
      </label>
      <input
        className="w-full bg-gray-700 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white px-3 py-2"
        type="password"
        name="password"
        id="password"
        required
        minLength={8}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </div>
  </div>
  <div className="relative">
    <label htmlFor="role" className="block font-medium text-white mb-1">
      Role
    </label>
    <select
      name="role"
      id="role"
      value={role}
      onChange={(event) => setRole(event.target.value)}
      className="w-full bg-gray-700 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white px-3 py-2"
    >
      <option value="client">Client</option>
      <option value="partner">Partner</option>
    </select>
  </div>

            <div className="flex items-center">
              <input type="submit" value="Sign Up" className="inline-flex cursor-pointer w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />
              {error && <div className="text-red-500 ml-4">{error}</div>}
            </div>
          </form>
        </div>
      );
    };
    
    export default SignUpForm;
    