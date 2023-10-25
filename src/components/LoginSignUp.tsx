import { ReactElement } from "react"

export default function LoginSignUp():ReactElement {
  return (
    <div className="space-x-4 hidden lg:block">
        <button className="font-Epilogue font-medium cursor-pointer">Login</button>
        <button className="py-2 px-7 border-2 rounded-xl font-Epilogue font-medium hover:bg-dark hover:text-light transition-all duration-200">Register</button>
    </div>
  )
}