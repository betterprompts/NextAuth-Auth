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
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch-text";
import ProfileDropdown from "@/components/profiledropdown";
import {
	HeartFilledIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

import { TfiDashboard } from 'react-icons/tfi';
import { BiUser } from 'react-icons/bi';
import { PiGear } from 'react-icons/pi';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

export const DashboardNavbar = () => {
	return (
		<NextUINavbar maxWidth="2xl" className="z-30" shouldHideOnScroll isBlurred={false}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				{/* Logo */}
				<NavbarBrand as="li" className="gap-3 max-w-fit md:hidden basis-1 pl-4">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">ACME</p>
					</NextLink>
				</NavbarBrand>

				{/* Nav links */}
				{/* <ul className="hidden md:flex gap-4 justify-start ml-2">
					{siteConfig.dashboardNavItems.map((item) => (
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
				</ul> */}
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden md:flex gap-2">
					<ProfileDropdown />
				</NavbarItem>
			</NavbarContent>

			{/* Hamburger Icon */}
			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>
			
			{/* Hamburger menu items */}
			<NavbarMenu className="opacity-95">
				<div className="mx-4 mt-2 flex flex-col gap-2 opacity-100">
					<NavbarMenuItem><Link href="/" color="primary"><TfiDashboard size="22" className="inline" />&nbsp;Dashboard</Link></NavbarMenuItem>
					<NavbarMenuItem><Link href="/profile" color="foreground"><BiUser size="22" className="inline" />&nbsp;Profile</Link></NavbarMenuItem>
					<NavbarMenuItem><Link href="/settings" color="foreground"><PiGear size="22" className="inline" />&nbsp;Settings</Link></NavbarMenuItem>
					<NavbarMenuItem><Link href="/help" color="foreground"><BsFillQuestionCircleFill size="22" className="inline" />&nbsp;Help</Link></NavbarMenuItem>
					<NavbarMenuItem><ThemeSwitch /></NavbarMenuItem>
					<NavbarMenuItem><Link href="/logout" color="danger"><FiLogOut size="22" className="inline" />&nbsp;Logout</Link></NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
