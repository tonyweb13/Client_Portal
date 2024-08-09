import Orders from "../../../../../assets/icons/pk_shopping_cart.png";
import ArrowRightIcon from "../../../../../assets/icons/pk_icon_arrow_right.png";
import ArrowDownIcon from "../../../../../assets/icons/pk_icon_arrow_down.png";
import PKLogo from "../../../../../assets/icons/pk_logo.png";
import DeliveredBoxIcon from "../../../../../assets/icons/pk_icon_delivered_box.png";
import TagsIcon from "../../../../../assets/icons/pk_tags.png";
import InvoicingIcon from "../../../../../assets/icons/pk_invoicing.png";
import SettingsIcon from "../../../../../assets/icons/pk_settings.png";
import CompanyLogo from "../../../../../assets/icons/pk_company_logo.png";
import SearchIcon from "../../../../../assets/icons/pk_search.png";
import USIcon from "../../../../../assets/icons/pk_usa.png";
import UKIcon from "../../../../../assets/icons/pk_uk.png";
import Logout from "../../../../../assets/icons/pk_logout.png";
import ProfileArrow from "../../../../../assets/icons/pk_profile_arrow.png";
import Wallet from "../../../../../assets/icons/pk_wallet.png";
import Download from "../../../../../assets/icons/pk_download.png";
import Add from "../../../../../assets/icons/pk_add.png";
import Home from "../../../../../assets/icons/pk_home.png";
import Loading from "../../../../../assets/icons/pk_loading.gif";

export const generateIcon = (icon) => {
    switch (icon) {
        case "Orders":
            return Orders;
        case "ArrowRight":
            return ArrowRightIcon;
        case "ArrowDown":
            return ArrowDownIcon;
        case "PKLogo":
            return PKLogo;
        case "DeliveredBox":
            return DeliveredBoxIcon;
        case "Tags":
            return TagsIcon;
        case "Invoicing":
            return InvoicingIcon;
        case "Settings":
            return SettingsIcon;
        case "CompanyLogo":
            return CompanyLogo;
        case "SearchIcon":
            return SearchIcon;
        case "USIcon":
            return USIcon;
        case "UKIcon":
            return UKIcon;
        case "Logout":
            return Logout;
        case "ProfileArrow":
            return ProfileArrow;
        case "Home":
            return Home;
        case "Wallet":
            return Wallet;
        case "Download":
            return Download;
        case "Add":
            return Add;
        case "Loading":
            return Loading;

        default:
            return "";
    }
};
