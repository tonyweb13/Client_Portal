import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    MainTitle,
    PageContainer,
    TitleContainer,
} from "../../shared/page-components/PageContainer.js";
import Widget from "../../shared/widget/widget.js";
import { getWidgets } from "../../../services/home-service.js";
import { setPageInfo } from "../../../redux/reducers/page-reducer.js";

export const Dashboard = () => {
    const dispatch = useDispatch();
    const widgets = useSelector((state) => state.widgets.widgets);

    useEffect(() => {
        dispatch(setPageInfo({ title: "Overview" }));
        dispatch(getWidgets());
    }, []);

    return (
        <PageContainer>
            <Widget widgets={widgets} />
        </PageContainer>
    );
};
