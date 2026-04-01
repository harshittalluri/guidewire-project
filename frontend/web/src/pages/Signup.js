import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";   // ✅ ADD THIS

function Signup(){

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function handleSignup(){

    if(!name || !email || !password){
      alert("Please fill all fields");
      return;
    }

    try{
      const res = await axios.post(
        "http://127.0.0.1:8000/auth/signup",   // ✅ backend API
        {
          name: name,
          email: email,
          password: password
        }
      );

      console.log(res.data);

      alert("Signup Successful 🎉");

      // optional: auto login
      localStorage.setItem("user", email);

      navigate("/dashboard");

    }catch(err){
      console.error(err);
      alert("Signup failed ❌");
    }

  }

  return(

    <section className="auth-page">

      <div className="auth-container">

        {/* LEFT */}
        <div className="auth-left">

          <h1>
            Start protecting your income today
          </h1>

          <p>
            AI powered insurance for gig workers.
            Instant claim settlement.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
            alt="bike"
          />

        </div>

        {/* RIGHT */}
        <motion.div
          className="auth-box"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
        >

          <h2 className="auth-title">
            Create Account
          </h2>

          <p className="muted">
            Join GigShield AI protection
          </p>

          <input
            className="input"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            className="btn-primary"
            onClick={handleSignup}
          >
            Signup
          </button>

          <p className="muted">
            Already have account?

            <span
              className="link"
              onClick={()=>navigate("/login")}
            >
              Login
            </span>

          </p>

        </motion.div>

      </div>

    </section>

  );

}

export default Signup;