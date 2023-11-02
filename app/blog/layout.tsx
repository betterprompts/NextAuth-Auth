'use client' 

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<Dropdown>
					<DropdownTrigger>
						<Button 
						variant="bordered" 
						>
						Open Menu
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="Static Actions">
						<DropdownItem key="new">New file</DropdownItem>
						<DropdownItem key="copy">Copy link</DropdownItem>
						<DropdownItem key="edit">Edit file</DropdownItem>
						<DropdownItem key="delete" className="text-danger" color="danger">
						Delete file
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				{children}
			</div>
		</section>
	);
}
