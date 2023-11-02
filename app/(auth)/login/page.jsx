"use client"

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Link } from "@nextui-org/link"

import AuthForm from "../authform"

export default function Login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault()

    console.log('user login', email, password)
  }

  return (
    <div className='flex flex-col justify-center max-w-md mx-auto'>
      <Card className="flex">
        <CardHeader className="flex items-center justify-center text-center mt-8">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Login</h1>
          </div>
        </CardHeader>
        <AuthForm handleSubmit={handleSubmit} />
        <CardFooter className="flex items-center justify-center text-center mb-8 mt-8">
          <p className="mr-2">Not signed up yet?</p>
          <Link href="/signup">
            Sign Up
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}