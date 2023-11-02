'use client' 

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { ThemeSwitch } from "@/components/theme-switch-text";
import { BiUser } from 'react-icons/bi';
import { PiGear } from 'react-icons/pi';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

export default function ProfileDropdown() {
  return (
    <Dropdown placement="bottom-end">
        <DropdownTrigger>
            <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="user" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="profile"><BiUser size="22" className="inline" /> Profile</DropdownItem>
            <DropdownItem key="settings"><PiGear size="22" className="inline" /> Settings</DropdownItem>
            <DropdownItem key="help"><BsFillQuestionCircleFill size="22" className="inline" /> Help</DropdownItem>
            <DropdownItem>
                {/* Light/Dark icon */}
				<ThemeSwitch />
            </DropdownItem>
            <DropdownItem key="logout" color="danger"><FiLogOut size="22" className="inline" /> Log Out</DropdownItem>
        </DropdownMenu>
    </Dropdown>
  )
}
