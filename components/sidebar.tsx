import { Logo } from "@/components/icons";
import { Tooltip } from "@nextui-org/tooltip";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Spacer} from "@nextui-org/spacer";
import {Divider} from "@nextui-org/divider";
import { TfiDashboard } from 'react-icons/tfi';
import { BiUser } from 'react-icons/bi';
import { PiGear } from 'react-icons/pi';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <div className="flex fixed z-30 hidden md:flex basis-1/5 sm:basis-full">
        <div className="pb-12 w-26 h-screen border-r-1 border-gray-400 flex flex-col justify-between items-center">
            <div>
                <Button href="/" variant="light" radius="none" size="lg" className="py-12">
                    <Logo />
                </Button>
                <Divider />
                {/* <Spacer y={4} /> */}
                <Button href="/" variant="light" radius="none" size="lg" className="py-12">
                    <Tooltip key="dashboard" placement="right" content="Dashboard">
                        <TfiDashboard size="30" className="w-full" />
                    </Tooltip>
                </Button>
                <Spacer y={0} />
                <Button href="/" variant="light" radius="none" size="lg" className="py-12">
                    <Tooltip key="profile" placement="right" content="Profile">
                        <BiUser size="30" className="w-full" />
                    </Tooltip>
                </Button>
            </div>
            <div>
                <Button href="/" variant="light" radius="none" size="lg" className="py-12">
                    <Tooltip key="settings" placement="right" content="Settings">
                        <PiGear size="30" className="w-full" />
                    </Tooltip>
                </Button>
                <Spacer y={0} />
                <Button href="/" variant="light" radius="none" size="lg" className="py-12">
                    <Tooltip key="help" placement="right" content="Help">
                        <BsFillQuestionCircleFill size="30" className="w-full" />
                    </Tooltip>
                </Button>
            </div>
        </div>
    </div>
  )
}
