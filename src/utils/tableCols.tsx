import type { UserRowProps } from "./types";

export const UserColumns = [
    {
        name: "Rank",
        cell: (row: UserRowProps) => row?.rank,
        sortable: true,
        width: '90px'
    },
    {
        name: "Name",
        cell: (row: UserRowProps) => <span className="capitalize">{row?.fullName || ""} </span>,
        sortable: true,
        width: "150px",
    },
    {
        name: "Email",
        selector: (row: UserRowProps) => row?.email,
        sortable: false
    },
    {
        name: "Role",
        cell: (row: UserRowProps) => <span className="capitalize">{row?.role}</span>,
        sortable: false
    },
];