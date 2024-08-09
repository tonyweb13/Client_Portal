import React, { useCallback, useState } from "react";
import {
    ActionsContainer,
    PageContainer,
} from "../../../shared/page-components/PageContainer.js";
import InputSelect from "../../../shared/inputs/InputSelect.js";
import { PrimaryButton } from "../../../shared/inputs/Button.js";
import styled from "styled-components";
import { medium, small } from "../../../shared/styles/sizes.js";
import Datatable from "../../../shared/datatable/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getInventory } from "../../../../services/inventory-services.js";
import { columns } from "./columns.js";
import { generateIcon } from "../../../shared/icons/generate-icon.js";
import { setPageInfo } from "../../../../redux/reducers/page-reducer.js";

function WarehouseStocks() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState("Pending Review");
    const [warehouse, setfilterByWarehouse] = useState("US");

    const list = useSelector((state) => state.inventory.data);
    const total = useSelector((state) => state.inventory.total);
    const user = useSelector((state) => state.user.user);

    const handleSelectChange = useCallback((e) => {
        switch (e.target.name) {
            case "status":
                setSelectedStatus(e.target.value);
                return;
            case "warehouse":
                setfilterByWarehouse(e.target.value);
                return;
        }
    }, []);

    const statusOptions = [
        { value: "Pending Review", label: "Pending Review" },
        { value: "Approved", label: "Approved" },
    ];

    const filterByWarehouseOptions = [
        { value: "US", label: "Filter by: US" },
        { value: "UK", label: "Filter by: UK" },
    ];

    const handleChangePage = useCallback((newPage) => {
        setPage(newPage);
    }, []);

    useEffect(() => {
        dispatch(setPageInfo({ title: "Warehouse Stocks" }));
        dispatch(getInventory(page, selectedStatus, warehouse));
    }, [page, selectedStatus, warehouse]);

    return (
        <PageContainer>
            <hr></hr>
            <InventoryActionsContainer>
                <LeftButtons>
                    <InputSelect
                        options={filterByWarehouseOptions}
                        onChange={handleSelectChange}
                        value={warehouse}
                        name="warehouse"
                    />
                    <InputSelect
                        options={statusOptions}
                        onChange={handleSelectChange}
                        value={selectedStatus}
                        name="status"
                    />
                    <ExportButton>
                        <DownloadIcon src={generateIcon("Download")} /> Export
                    </ExportButton>
                </LeftButtons>
                <div>
                    {user?.is_admin == "1" ? (
                        <AddReceivingButton>
                            <AddButtonContent>
                                <AddIcon src={generateIcon("Add")} />
                                <p>Add Stocks</p>
                            </AddButtonContent>
                        </AddReceivingButton>
                    ) : null}
                </div>
            </InventoryActionsContainer>
            <Datatable
                total={total}
                perPage={2}
                page={page}
                handlePageChange={handleChangePage}
                rows={list}
                columns={columns}
            />
        </PageContainer>
    );
}

export default WarehouseStocks;

const AddIcon = styled.img`
    margin-top: ${small + 2}px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

const LeftButtons = styled.div`
    display: flex;
    gap: ${small}px;
`;

const AddButtonContent = styled.div`
    display: flex;
    gap: ${small}px;
`;

const AddReceivingButton = styled(PrimaryButton)`
    margin-top: 0px;
`;

const ExportButton = styled(PrimaryButton)`
    position: relative;
`;

const InventoryActionsContainer = styled(ActionsContainer)`
    justify-content: space-between;
    gap: ${medium}px;
`;

const DownloadIcon = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    position: absolute;
    left: 17px;
    top: 6px;
`;
