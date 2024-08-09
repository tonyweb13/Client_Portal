import React, { useEffect, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "./pagination.js";
import styled from "styled-components";
import { H3 } from "../generic/headers.js";
import { headerHeight, medium, rowsHeight, small } from "../styles/sizes.js";
import { black, grayText, tertiary, white } from "../styles/color.js";
import { useSelector } from "react-redux";
import { fontFamily } from "../styles/theme.js";

export default function Datatable(props) {
    const { total, perPage, page, handlePageChange, rows, columns, loading } =
        props;
    const isAdmin =
        useSelector((state) => state.user.user.is_admin) == "1" ? true : false;
    const getRowId = (row) => row.id;

    const windowHeight = window.innerHeight - 279;

    const recordsInfo = useMemo(() => {
        return (
            <RecordsInfo>
                <TextInInfo>{"Displaying "}</TextInInfo>
                {page == 1 ? 1 : parseInt(page - 1) * parseInt(perPage)} {"- "}
                {page == 1
                    ? perPage
                    : parseInt((page - 1) * perPage) + parseInt(perPage) > total
                    ? total
                    : parseInt((page - 1) * perPage) + parseInt(perPage)}{" "}
                <TextInInfo>out of </TextInInfo> {total}
            </RecordsInfo>
        );
    }, [page]);

    return (
        <div style={{ height: `${windowHeight}px` }}>
            <style>
                {`
                .MuiDataGrid-root .MuiDataGrid-columnHeaders {
                    background-color: ${isAdmin ? black : tertiary};
                    color: ${white};
                    min-height: ${headerHeight}px !important;
                }
                .MuiDataGrid-columnHeadersInner {
                    height: ${headerHeight}px;
                }

                .MuiDataGrid-root .MuiDataGrid-withBorderColor  {
                    height: ${headerHeight}px !important;
                }

                .MuiDataGrid-root .MuiDataGrid-menuIconButton {
                    color: ${white}; 
                  }
                  .MuiSvgIcon-root {
                    color: ${white}; 
                  }
                  .MuiButtonBase-root {
                    background-color: ${black};
                    color: ${white};
                    &:hover {
                        color: ${black} ;
                    }
                  }

                  .MuiDataGrid-root .MuiDataGrid-cellContent {
                    color: ${black};
                    font-size: 12px;
                    }
                 .MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight) > .MuiDataGrid-cell {
                    
                      min-height: 28px  !important; 
                   }

                .MuiDataGrid-root .MuiDataGrid-row  {
                    
                    min-height: 26px !important;
                  }
                 
                  .MuiDataGrid-columnHeaderRow {
                    height: ${rowsHeight}px;
                  }
                `}
            </style>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={getRowId}
                hideFooter
                disableColumnMenu
                loading={loading}
            />

            <PaginationBase>
                <div>{recordsInfo}</div>
                <div>
                    {FooterComponent({
                        total,
                        perPage,
                        page,
                        handlePageChange,
                    })}
                </div>
            </PaginationBase>
        </div>
    );
}

const FooterComponent = (properties) => {
    const { total, perPage, page, handlePageChange } = properties;
    return (
        <Pagination
            total={total}
            perPage={perPage}
            page={page}
            handlePageChange={handlePageChange}
        />
    );
};

const TextInInfo = styled.span`
    color: ${grayText};
    font-weight: 100;
`;

const RecordsInfo = styled(H3)`
    margin-top: ${small}px;
    color: ${black};
    font-family: ${fontFamily.font};
    font-size: 17px;
`;

const PaginationBase = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${medium}px;
`;
