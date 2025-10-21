
import { useRef } from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { BACKEND_URl } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignIn(){

  const usernameRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const navigate = useNavigate();

  async function signin(){
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value
    const response = await axios.post(BACKEND_URl + "/api/v1/signin",{
      username,
      password
    })
    const jwt = response.data.token;
    localStorage.setItem("token", "jwt");
    navigate("/dashboard")
  }
  return <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input reference={usernameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />
        <div>
          <Button onClick={signin} variant="primary" text="SignIn" fullWidth={true} loading={true}/>
        </div>
      </div>
  </div>
}
