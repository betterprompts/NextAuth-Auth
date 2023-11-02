"use client"

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Link } from "@nextui-org/link"

import AuthForm from "../authform"

export default function Signup() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault()

    console.log('user signup', email, password)
  }

  return (
    <div className='flex flex-col justify-center max-w-md mx-auto'>
      <Card className="flex">
        <CardHeader className="flex items-center justify-center text-center mt-8">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Signup</h1>
          </div>
        </CardHeader>
        <AuthForm handleSubmit={handleSubmit} />
        <CardFooter className="flex items-center justify-center text-center mb-8 mt-8">
          <p className="mr-2">Already have an account?</p>
          <Link href="/login">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}