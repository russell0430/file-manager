import React, { useRef, useState } from "react"
import { LoginWrap, LoginCard, Form } from "./style"
import { login } from "@/request"
import { email, password } from "@/validations"
import { toast } from "react-hot-toast"
import Envelope from "@/components/icons/Envelope"
import Check from "@/components/icons/Check"
import Key from "@/components/icons/Key"
import { useRouter } from "@/routes/router"
import { useAuth } from "@/utiliities/Auth"
import Loading from "@/components/icons/Loading"
const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const [username, setUsername] = useState(
    localStorage.getItem("username") || "12@12.com"
  )
  const [pwd, setPwd] = useState(localStorage.getItem("pwd") || "123456")

  const usernameRef = useRef<HTMLInputElement>(null)
  const pwdRef = useRef<HTMLInputElement>(null)
  const [usernameActive, setUsernameActive] = useState(false)
  const [pwdActive, setPwdActive] = useState(false)

  const { setToken } = useAuth()

  const onChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUsername(event.target.value)
  }
  const onChangePwd: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPwd(event.target.value)
  }

  const onFocusUsername = () => {
    setUsernameActive(true)
  }
  const onBlurUsername = () => {
    setUsernameActive(false)
  }
  const onFocusPwd = () => {
    setPwdActive(true)
  }
  const onBlurPwd = () => {
    setPwdActive(false)
  }

  const { navigate } = useRouter()
  const hanldleLogin = () => {
    // check if  input is empty and legal
    let error = [
      email(username, { name: "email", required: true }),
      password(pwd, { required: true, name: "pwd", min: 6, max: 20 }),
    ].find((valid) => {
      return typeof valid === "string"
    })
    if (error) {
      //
      toast(`${error}`, { position: "top-center", duration: 2000 })
    } else {
      setLoading(true)
      login({ user: username, pwd })
        .then(async (response) => {
          const { data, msg, status } = response
          if (status === 200 && data && data.success) {
            toast(`login successful`, {
              position: "top-center",
            })
            localStorage.setItem("username", username)
            localStorage.setItem("pwd", pwd)

            setToken(data.token || "")
            navigate("/")
          } else {
            toast(`fail to login :${msg}`, {
              position: "top-center",
            })
          }
        })
        .catch((err) => {})
        .finally(() => {
          setLoading(false)
        })
    }
  }
  return (
    <LoginWrap>
      <LoginCard>
        <div className="title">
          <span>Login</span>
        </div>
        <div className="content">
          <div className="info-img-wrap">
            <div className="info-img"></div>
          </div>
          <div className="form-wrap">
            <Form>
              <div className="login-info">
                <div className="info-title">Welcome Back :)</div>
                <div className="info-detail">
                  To contact with us,please login with your personal information
                  by email and password
                </div>
              </div>
              <div className={`user input ${usernameActive ? "active" : ""}`}>
                <div className="prefix-icon">
                  <Envelope />
                </div>
                <div className="input-content">
                  <div className="label">email</div>
                  <input
                    type="text"
                    value={username}
                    onChange={onChangeUsername}
                    onFocus={onFocusUsername}
                    onBlur={onBlurUsername}
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
              <div className="btns">
                {loading ? (
                  <div className="loading btn">
                    <div>
                      <Loading />
                    </div>
                  </div>
                ) : (
                  <div className="login btn" onClick={hanldleLogin}>
                    <div>login</div>
                  </div>
                )}
                <div className="register btn" onClick={hanldleLogin}>
                  <div>register</div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </LoginCard>
    </LoginWrap>
  )
}

export default Login
