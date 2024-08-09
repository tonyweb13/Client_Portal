import React, { useCallback, useState, useEffect } from "react";
import {
    ActionsContainer,
    PageContainer,
} from "../../../shared/page-components/PageContainer.js";
import Datatable from "../../../shared/datatable/index.js";
import InputSelect from "../../../shared/inputs/InputSelect.js";
import { columns } from "./columns.js";
import { useDispatch, useSelector } from "react-redux";
import { getProductCatalog } from "../../../../services/product-catalog-services.js";
import { MainHeaderTitle } from "../../../navigation/header.js";
import { setPageInfo } from "../../../../redux/reducers/page-reducer.js";

function ProductCatalog() {
    const dispatch = useDispatch();
    const [selectedStatus, setSelectedStatus] = useState("Approved");
    const [page, setPage] = useState(1);
    const list = useSelector((state) => state.productCatalog.productCatalog);

    const handleChangePage = useCallback((newPage) => {
        setPage(newPage);
    }, []);

    const handleSelectChange = useCallback((e) => {
        setSelectedStatus(e.target.value);
    }, []);

    const options = [
        { value: "Approved", label: "Approved" },
        { value: "Hold", label: "Hold" },
    ];

    useEffect(() => {
        dispatch(setPageInfo({ title: "Products" }));
        dispatch(getProductCatalog(page, selectedStatus));
    }, [page, selectedStatus]);

    return (
        <PageContainer>
            <hr></hr>
            <ActionsContainer>
                <InputSelect
                    options={options}
                    onChange={handleSelectChange}
                    value={selectedStatus}
                />
            </ActionsContainer>
            <Datatable
                total={4}
                perPage={2}
                page={page}
                handlePageChange={handleChangePage}
                rows={list}
                columns={columns}
            />
        </PageContainer>
    );
}

export default ProductCatalog;
