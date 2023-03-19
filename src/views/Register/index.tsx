import Check from "@/components/icons/Check"
import Envelope from "@/components/icons/Envelope"
import Key from "@/components/icons/Key"
import { register } from "@/request"
import { useRouter } from "@/routes/router"
import React, { useState } from "react"
import toast from "react-hot-toast"
import { RegisterWrap, RegisterCard, Form } from "./style"
const Register: React.FC = () => {
  const { navigate } = useRouter()
  const [user, setUser] = useState("12@12.com")
  const [pwd, setPwd] = useState("123456")
  const [repeatPwd, setRepeatPwd] = useState("123456")
  const [userActive, setUserActive] = useState(false)
  const [pwdActive, setPwdActive] = useState(false)
  const [repeatPwdActive, setRepeatPwdActive] = useState(false)
  const onChangeUser: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setUser(event.target.value)
  }
  const onChangePwd: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPwd(event.target.value)
  }
  const onChangeRepeatPwd: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setRepeatPwd(event.target.value)
  }

  const onFocusUser = () => {
    setUserActive(true)
  }
  const onBlurUser = () => {
    setUserActive(false)
  }
  const onFocusPwd = () => {
    setPwdActive(true)
  }
  const onBlurPwd = () => {
    setPwdActive(false)
  }
  const onFocusRepeatPwd = () => {
    setRepeatPwdActive(true)
  }
  const onBlurRepeatPwd = () => {
    setRepeatPwdActive(false)
  }
  const handleRegister = () => {
    if (pwd !== repeatPwd) {
      toast("pwd must equals to repeat pwd", {
        duration: 2000,
        position: "top-center",
      })
      return
    }
    register({ user, pwd }).then(async (response) => {
      const result = await response.text()
      if (response.status === 200) {
        navigate("/login")
        toast("register successful", { duration: 3000, position: "top-center" })
      }
      console.log(response.status, result)
    })
  }
  return (
    <RegisterWrap>
      <RegisterCard>
        <div className="title">
          <span>Register</span>
        </div>
        <div className="content">
          <div className="info-img-wrap">
            <div className="info-img"></div>
          </div>
          <div className="form-wrap">
            <Form>
              <div className="login-info">
                <div className="info-title">Welcome :)</div>
                <div className="info-detail">
                  Glad to meet you here,hope you can have a good time!
                </div>
              </div>
              <div className={`user input ${userActive ? "active" : ""}`}>
                <div className="prefix-icon">
                  <Envelope />
                </div>
                <div className="input-content">
                  <div className="label">email</div>
                  <input
                    type="text"
                    value={user}
                    onChange={onChangeUser}
                    onFocus={onFocusUser}
                    onBlur={onBlurUser}
                  />
                </div>
                <div className="appendix-icon">
                  <Check />
                </div>
              </div>
              <div className={`pwd input ${pwdActive ? "active" : ""}`}>
                <div className="prefix-icon">
                  <Key />
                </div>
                <div className="input-content">
                  <div className="label">password</div>
                  <input
                    type="password"
                    value={pwd}
                    onChange={onChangePwd}
                    onFocus={onFocusPwd}
                    onBlur={onBlurPwd}
                  />
                </div>
                <div className="appendix-icon">
                  <Check />
                </div>
              </div>
              <div
                className={`repeat-pwd input ${
                  repeatPwdActive ? "active" : ""
                }`}
              >
                <div className="prefix-icon">
                  <Key />
                </div>
                <div className="input-content">
                  <div className="label">repeat password</div>
                  <input
                    type="password"
                    value={repeatPwd}
                    onChange={onChangeRepeatPwd}
                    onFocus={onFocusRepeatPwd}
                    onBlur={onBlurRepeatPwd}
                  />
                </div>
                <div className="appendix-icon">
                  <Check />
                </div>
              </div>
              <div className="btns">
                <div className="register btn" onClick={handleRegister}>
                  <div>Confirm</div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </RegisterCard>
    </RegisterWrap>
  )
}

export default Register
