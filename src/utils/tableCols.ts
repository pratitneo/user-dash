import type { UserRowProps } from "./types";

export const UserColumns = [
    { name: "Rank", selector: (row: UserRowProps) => row?.rank, sortable: true, width: '90px' },
    { name: "Name", selector: (row: UserRowProps) => row?.fullName, sortable: true, width: '150px' },
    { name: "Email", selector: (row: UserRowProps) => row?.email, sortable: false },
    { name: "Role", selector: (row: UserRowProps) => row?.role, sortable: false },
];