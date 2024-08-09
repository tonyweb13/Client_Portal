import React from "react";
import styled from "styled-components";
import { fontFamily } from "../../../shared/styles/theme.js";
import { black, gray } from "../../../shared/styles/color.js";
import { MainTitle } from "../../../shared/page-components/PageContainer.js";

function Details (props) {
    let getDetails = props.dataDetails

    return (
        <MainContainer>
            <MainTitle>Order Item</MainTitle>
            <Table>
                <thead>
                    <TableRow>
                        <TableHeader>Order number</TableHeader>
                        <TableHeader>Item title</TableHeader>
                        <TableHeader>Item SKU</TableHeader>
                        <TableHeader>Quantity</TableHeader>
                        <TableHeader>Item Weight(kg)</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {getDetails.map((details, i) => (
                        <TableRow key={details.id}>
                            <TableData>{details.ordernumber}</TableData>
                            <TableData>{details.itemtitle}</TableData>
                            <TableData>{details.sku}</TableData>
                            <TableData>{details.quantity}</TableData>
                            <TableData>{details.totalweight}</TableData>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </MainContainer>
    );
}

export default Details;

const MainContainer = styled.div`
    font-family: ${fontFamily.font};
`;

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const TableRow = styled.tr`
    border: 1px solid ${gray};
`;

const TableHeader = styled.th`
    border: 1px solid ${gray};
    padding: 8px;
    background-color: ${black};
    color: #fff;
`;

const TableData = styled.td`
    border: 1px solid ${gray};
`;
