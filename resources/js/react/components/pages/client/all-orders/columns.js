export const columns = [
    { field: "id", headerName: "Order #", width: 90 },
    {
        field: "shippedDate",
        headerName: "Shipped date",
        width: 150,
        editable: true,
    },
    {
        field: "shippingAddress",
        headerName: "Shipping Address",
        width: 150,
        editable: true,
    },
    {
        field: "status",
        headerName: "Status",
        type: "number",
        width: 110,
        editable: true,
    },
    {
        field: "carrier",
        headerName: "Carrier",
        description: "This column has a value getter and is not sortable.",
        sortable: true,
        width: 160,
    },
];
