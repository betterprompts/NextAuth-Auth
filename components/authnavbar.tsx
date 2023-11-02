import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch-icon";
import {
	HeartFilledIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const AuthNavbar = () => {
	return (
		<NextUINavbar maxWidth="xl" shouldHideOnScroll>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				{/* Logo */}
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">ACME</p>
					</NextLink>
				</NavbarBrand>

				{/* Nav links */}
				<ul className="hidden md:flex gap-4 justify-start ml-2">
					{siteConfig.authNavItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden md:flex gap-2">
					{/* Light/Dark icon */}
					<ThemeSwitch />
				</NavbarItem>

				{/* Sign In/Up Link/Button */}
				<NavbarItem className="hidden md:flex gap-4 justify-start ml-2">
					<Link href="/login" aria-label="Login">
						Sign In
					</Link>
					<Button
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href="/signup"
						startContent=""
						variant="flat"
					>
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>

			{/* Hamburger Icon */}
			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				{/* Light/Dark icon */}
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
			
			{/* Hamburger menu items */}
			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.authNavMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.authNavMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
