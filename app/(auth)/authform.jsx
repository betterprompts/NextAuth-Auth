"use client"

import { useState } from 'react'

import {Button} from '@nextui-org/button'
import {Input} from "@nextui-org/input"
import {Link} from "@nextui-org/link"
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card"

import {EyeFilledIcon} from "@/components/EyeFilledIcon"
import {EyeSlashFilledIcon} from "@/components/EyeSlashFilledIcon"
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons"

export default function AuthForm({ handleSubmit }) {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => setIsVisible(!isVisible)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <CardBody>
            <form onSubmit={(e) => handleSubmit(e, email, password)}>
                <div className="flex w-full flex-wrap gap-5 px-6">
                    <Input
                        type="email" 
                        label="Email" 
                        variant="underlined"
                        placeholder="Enter your email" 
                        fullWidth={true}
                        className="border-none"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <Input
                        label="Password"
                        variant="underlined"
                        placeholder="Enter your password"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        fullWidth={true}
                        className="border-none"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <Button type="submit" color="primary" size="lg" fullWidth={true} className="mt-5">Submit</Button>
                </div>
            </form>
            <div className="flex items-center justify-center text-center mt-12">
                <h2>Or login using:</h2>
            </div>
            <div className="flex items-center justify-center text-center mt-5">
                <Link isExternal href="#" aria-label="Twitter">
                    <TwitterIcon className="text-default-500" />
                </Link>
                <Link isExternal href="#" aria-label="Discord">
                    <DiscordIcon className="text-default-500" />
                </Link>
                <Link isExternal href="#" aria-label="Github">
                    <GithubIcon className="text-default-500" />
                </Link>
            </div>
        </CardBody>
    )
}
