import React, { useState, useEffect } from "react";
import Datatable from "../../../shared/datatable/index.js";
import { PrimaryButton } from "../../../shared/inputs/Button.js";
import TextField from "../../../shared/inputs/TextField.js";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../../../../services/all-orders-services.js";
import {
    ActionsContainer,
    PageContainer,
} from "../../../shared/page-components/PageContainer.js";
import { useCallback } from "react";
import { orderTitle } from "../../../navigation/header.js";
import { setPageInfo } from "../../../../redux/reducers/page-reducer.js";
import { setAllOrdersLoading } from "../../../../redux/reducers/all-orders-reducer.js";
import { getAllOrdersDetails } from "../../../../services/all-orders-details-services.js";
import Modal from "../../../shared/modal/Modal.js";
import styled from "styled-components";
import { tertiary } from "../../../shared/styles/color.js";
import Details from "./Details.js";

function AllOrders() {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const searchOnChange = () => {};
    const list = useSelector((state) => state.allOrders.data);
    const total = useSelector((state) => state.allOrders.total);
    const loading = useSelector((state) => state.allOrders.loading);
    const viewDetails = useSelector((state) => state.allOrdersDetails.data);
    const [isDetailsViewed, setIsDetailsViewed] = useState(false);

    const title = orderTitle();

    useEffect(() => {
        dispatch(setPageInfo({ title: "Orders" }));
        dispatch(setAllOrdersLoading(true));
        dispatch(getAllOrders(page, title));
    }, [page]);

    useEffect(() => {
        setPage(1);
        dispatch(getAllOrders(1, title));
    }, [title]);

    const handleViewDetails = (orderid) => {
        dispatch(getAllOrdersDetails(orderid));
    };

    const handleClosDetails = useCallback(() => {
        setTimeout(() => {
            setIsDetailsViewed(false);
        }, 300);
    }, []);

    const columns = [
        {
            field: "ordernumber",
            headerName: "Order Number",
            flex: 1,
            renderCell: (params) => {
                return (
                    <ViewDetails
                        onClick={() => {
                            handleViewDetails(params.row.orderid);
                            setIsDetailsViewed(true);
                        }}
                    >
                        {params.row.orderid}
                    </ViewDetails>
                );
            },
        },
        {
            field: "OrderDate",
            headerName: "Order Date",
            flex: 1,

        },
        {
            field: "OrderStatus",
            headerName: "Order Status",
            flex: 1,
        },
        {
            field: "ShippingAddress",
            headerName: "Shipping Address",
            renderCell: (params) => {
                let spstreet1 = params.row.ShipStreet1 ?? "";
                let spstreet2 = params.row.ShipStreet2 ?? "";
                let spstreet3 = params.row.ShipStreet3 ?? "";
                let spcity = params.row.ShipCity ?? "";
                let spState = params.row.ShipPostalCode ?? "";
                let zpcode = params.row.ShipStateProvCode ?? "";
                let cntry = params.row.ShipCountryCode ?? "";

                return (
                    spstreet1 +
                    " " +
                    spstreet2 +
                    " " +
                    spstreet3 +
                    " " +
                    spcity +
                    " " +
                    spState +
                    " " +
                    zpcode +
                    " " +
                    cntry
                );
            },
            flex: 1,
        },
        {
            field: "StoreName",
            headerName: "Store Name",
            flex: 1,
        },
        {
            field: "RecordSource",
            headerName: "Record Source",
            renderCell: (params) => {
                if (params.row.RecordSource == "ShipWorks") {
                    return "US";
                } else if (params.row.RecordSource == "ShipStation") {
                    return "UK";
                }
            },
            flex: 1,
        },
    ];

    const handleChangePage = useCallback((newPage) => {
        setPage(newPage);
    }, []);

    return (
        <>
            <Modal isOpen={isDetailsViewed} onClose={handleClosDetails}>
                <Details dataDetails={viewDetails} />
            </Modal>
            <PageContainer>
                <hr></hr>
                <ActionsContainer>
                    <div>
                        <PrimaryButton>Export</PrimaryButton>
                    </div>
                    <TextField
                        onChange={searchOnChange}
                        placeholder={"Search"}
                    />
                </ActionsContainer>
                <Datatable
                    total={total}
                    perPage={100}
                    page={page}
                    handlePageChange={handleChangePage}
                    rows={list}
                    columns={columns}
                    loading={loading}
                />
            </PageContainer>
        </>
    );
}

export default AllOrders;

const ViewDetails = styled.span`
    color: ${tertiary};
    cursor: pointer;
    font-wieght: 900;
    &:hover {
        text-decoration: underline;
    }
`;
