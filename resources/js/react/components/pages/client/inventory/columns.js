export const columns = [
    { field: "id", headerName: "Order #", width: 90 },
    {
        field: "shippedDate",
        headerName: "Check In Date",
        width: 150,
        editable: true,
    },
    {
        field: "shippingAddress",
        headerName: "SKU",
        width: 150,
        editable: true,
    },
    {
        field: "status",
        headerName: "Item Title",
        type: "number",
        width: 110,
        editable: true,
    },
    {
        field: "carrier",
        headerName: "Count",
        sortable: true,
        width: 160,
    },
    {
        field: "carrier1",
        headerName: "Warehouse",
        sortable: true,
        width: 160,
    },
];
