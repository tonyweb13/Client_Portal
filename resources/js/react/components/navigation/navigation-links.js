export const NavigationLinks = [
    {
        icon: "Home",
        name: "Home",
        link: "/",
        subLink: [],
    },
    {
        icon: "Orders",
        name: "Orders",
        link: "/",
        subLink: [
            {
                name: "Awaiting Shipments",
                link: "/awaiting-shipments",
            },
            {
                name: "Bad Address",
                link: "/bad-address",
            },
            {
                name: "Hold Brazil CPF",
                link: "/hold-brazil-cpf",
            },
            {
                name: "Postal Hold",
                link: "/postal-hold",
            },
        ],
    },
    {
        icon: "DeliveredBox",
        name: "Shipments",
        link: "/",
        subLink: [],
    },
    {
        icon: "DeliveredBox",
        name: "Inventory",
        link: "",
        subLink: [
            {
                name: "Inventory Manager",
                link: "/",
            },
            {
                name: "Warehouse Stocks",
                link: "/warehouse-stocks",
            },
            {
                name: "Shipments to Warehouse",
                link: "/",
            },
        ],
    },
    {
        icon: "Invoicing",
        name: "Products",
        link: "/product-catalog",
        subLink: [],
    },
    {
        icon: "Invoicing",
        name: "Invoicing",
        link: "/",
        subLink: [],
    },
    {
        icon: "Settings",
        name: "Settings",
        link: "/",
        subLink: [
            {
                name: "Roles",
                link: "/all-orders",
            },
            {
                name: "Setup Dashboard",
                link: "/login",
            },
            {
                name: "Password Reset",
                link: "/login",
            },
            {
                name: "Submit Ticket",
                link: "/login",
            },
        ],
    },
];
