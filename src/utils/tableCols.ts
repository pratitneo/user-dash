import type { UserRowProps } from "./types";

export const UserColumns = [
    { name: "Rank", selector: (row: UserRowProps) => row?.rank, sortable: true },
    { name: "Name", selector: (row: UserRowProps) => row?.fullName, sortable: true },
    { name: "Email", selector: (row: UserRowProps) => row?.email, sortable: false },
    { name: "Role", selector: (row: UserRowProps) => row?.role, sortable: false },
];