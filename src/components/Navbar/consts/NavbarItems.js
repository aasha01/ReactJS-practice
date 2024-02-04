import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import BathtubIcon from "@mui/icons-material/Bathtub";
import EmailIcon from "@mui/icons-material/Email";

export const mainNavbarItems = [
  {
    id: 0,
    icon: <PersonIcon />,
    label: "User",
    route: "user",
  },
  {
    id: 1,
    icon: <HistoryToggleOffIcon />,
    label: "History",
    route: "history",
  },
  {
    id: 2,
    icon: <BathtubIcon />,
    label: "Products",
    route: "products",
  },
  {
    id: 3,
    icon: <EmailIcon />,
    label: "Messages",
    route: "messaging",
  },
  {
    id: 4,
    icon: <ProductionQuantityLimitsIcon />,
    label: "Cart",
    route: "shoppingcart",
  },
];
