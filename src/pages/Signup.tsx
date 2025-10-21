import { useRef } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { BACKEND_URl } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp(){

  const usernameRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const navigate = useNavigate();

  async function signup(){
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value
    await axios.post(BACKEND_URl + "/api/v1/signup",{
      username,
      password
    })
    alert("You have signed up");
    navigate("/signin")
  }

  return <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input reference={usernameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />
        <div>
          <Button onClick={signup} variant="primary" text="SignUp" fullWidth={true} loading={true}/>
        </div>
      </div>
  </div>
}
