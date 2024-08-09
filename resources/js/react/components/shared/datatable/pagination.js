import React from "react";
import { Pagination as Pages } from "@mui/material";
import styled from "styled-components";

const PaginationContainer = styled.div`
    width: 100%;
    margin: auto;
`;

export default function Pagination(props) {
    const { total, perPage, page, handlePageChange } = props;
    const totalPages = parseInt(total) / parseInt(perPage);

    const handoleChangePage = (event, newPage) => {
        handlePageChange(newPage);
    };

    return (
        <PaginationContainer id="page">
            <Pages
                count={parseInt(totalPages.toFixed())}
                variant="outlined"
                page={page}
                onChange={handoleChangePage}
            />
        </PaginationContainer>
    );
}
