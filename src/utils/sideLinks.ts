import { MdDashboard, MdPeople, MdSettings } from "react-icons/md";
import type { SideLinkType } from "./types";

export const sideLinks: SideLinkType[] = [
    {
        name: 'dashboard',
        url: '/dashboard',
        icon: MdDashboard,

    },
    {
        name: 'user',
        url: '/user',
        icon: MdPeople,
    },
    {
        name: 'settings',
        url: '/settings',
        icon: MdSettings,
    }
]