import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import { RiPieChart2Fill } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
import {
  AccountBalanceWallet,
  Apps,
  ArrowDropDown,
  Dashboard,
  Delete,
  Login,
  MoreHoriz,
  Notifications,
  People,
  PersonAddAlt1,
  Search,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./DashBoard.css";

const rows = [
  {
    id: 1,
    invoiceId: "#AHGA68",
    customer: "Jacob Marcus",
    date: "23/09/2022",
    paidAmount: "$100",
    actions: "",
  },
  {
    id: 2,
    invoiceId: "#AHGA68",
    customer: "Jacob Marcus",
    date: "23/09/2022",
    paidAmount: "$100",
    actions: "",
  },
  {
    id: 3,
    invoiceId: "#AHGA68",
    customer: "Jacob Marcus",
    date: "23/09/2022",
    paidAmount: "$100",
    actions: "",
  },
  {
    id: 4,
    invoiceId: "#AHGA68",
    customer: "Jacob Marcus",
    date: "23/09/2022",
    paidAmount: "$100",
    actions: "",
  },
  {
    id: 5,
    invoiceId: "#AHGA68",
    customer: "Jacob Marcus",
    date: "23/09/2022",
    paidAmount: "$100",
    actions: "",
  },
];

function DashboardPage() {
  const [notification, setNotification] = useState<null | HTMLElement>(null);
  const [profile, setProfile] = useState<null | HTMLElement>(null);
  const [deleteRow, setDeleteRow] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const notificationOpen = Boolean(notification);
  const profileOpen = Boolean(profile);
  const moreOpen = Boolean(deleteRow);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNotification(event.currentTarget);
  };

  const handleProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfile(event.currentTarget);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDeleteRow(event.currentTarget);
  };

  const handleClose = () => {
    setNotification(null);
  };

  const handleProfileClose = () => {
    setProfile(null);
  };

  const handleDeleteClose = () => {
    setDeleteRow(null);
  };

  return (
    <Box className="backgroundContainer">
      <Box className="tabContainer">
        <Box className="tabTopContainer">
          <Box className="welcomeContainer">
            <Typography className="welcome">Welcome</Typography>
            <Typography className="lorem">to Lorem</Typography>
          </Box>
          <Divider />
          <Box className="dashboardContainer">
            <Dashboard />
            <Typography ml={1}>Dashboard</Typography>
          </Box>
        </Box>
        <Box className="tabBottomContainer">
          <Button
            className="tab-button"
            variant="contained"
            startIcon={<Login color="disabled" />}
            onClick={() => navigate("/")}
          >
            Logout
          </Button>
          <Box className="loremContainer">
            <Apps className="apps-icon" />
            <Typography className="loremText">
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="overViewContainer">
        <Box className="overViewHeaders">
          <Box className="navBar">
            <Typography className="overviewHeading">Overview</Typography>
            <Box className="searchbox">
              <TextField
                className="serachInput"
                label="search"
                size="small"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                id="basic-button"
                aria-controls={notificationOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={notificationOpen ? "true" : undefined}
                onClick={handleClick}
              >
                <Notifications className="notificationIcon" color="primary" />
              </Button>
              <Box className="infoContainer">
                <Box className="adminContianer">
                  {/* <img src={profile} alt="profile"  /> */}
                  <AccountCircleIcon color="primary" />
                  <Typography className="admin">Admin </Typography>
                  <Button
                    id="basic-button"
                    aria-controls={profileOpen ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={profileOpen ? "true" : undefined}
                    onClick={handleProfile}
                  >
                    <ArrowDropDown color="primary" />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={profile}
                    open={profileOpen}
                    onClose={handleProfileClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    className="menuCard"
                  >
                    <MenuItem onClick={handleClose} className="profilePopup">
                      <AccountCircleIcon color="primary" />

                      <Typography className="danielle">
                        Danielle Campbell{" "}
                      </Typography>
                      <Divider />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button
                        className="tab-button"
                        variant="contained"
                        startIcon={<Login color="disabled" />}
                        onClick={() => navigate("/")}
                      >
                        Logout
                      </Button>
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="cardsContainer">
          <Box className="eachCard">
            <Box className="iconContainer">
              <AccountBalanceWallet className="card-icon" />
            </Box>
            <Box className="cardContent">
              <Typography variant="h5" className="cardHeading">
                $374k
              </Typography>
              <Typography>Total Revenue</Typography>
            </Box>
          </Box>
          <Box className="eachCard">
            <Box className="iconContainer">
              <RiPieChart2Fill className="card-icon" />
            </Box>
            <Box className="cardContent">
              <Typography variant="h5" className="cardHeading">
                $175
              </Typography>
              <Typography>Last month Revenue</Typography>
            </Box>
          </Box>
          <Box className="eachCard">
            <Box className="iconContainer">
              <People color="primary" className="card-icon" />
            </Box>
            <Box className="cardContent">
              <Typography variant="h5" className="cardHeading">
                102
              </Typography>
              <Typography>Total Customers</Typography>
            </Box>
          </Box>
          <Box className="eachCard">
            <Box className="iconContainer">
              <PersonAddAlt1 color="primary" className="card-icon" />
            </Box>
            <Box className="cardContent">
              <Typography variant="h5" className="cardHeading">
                16
              </Typography>
              <Typography>Last month customers</Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <TableContainer component={Paper} className="tableContainer">
            <Table>
              <TableHead>
                <TableRow className="tableRow">
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="tableHeaders">Invoice Id</TableCell>
                  <TableCell align="center" className="tableHeaders">
                    Customer
                  </TableCell>
                  <TableCell align="center" className="tableHeaders">
                    Date
                  </TableCell>
                  <TableCell align="center" className="tableHeaders">
                    Paid Amount
                  </TableCell>
                  <TableCell align="center" className="tableHeaders">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell component="th" scope="row" className="invoice">
                      {row.invoiceId}
                    </TableCell>
                    <TableCell align="center" className="tab-customer">
                      {row.customer}
                    </TableCell>
                    <TableCell align="center" className="tab-customer">
                      {row.date}
                    </TableCell>
                    <TableCell align="center" className="tab-customer">
                      {row.paidAmount}
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        id="basic-button"
                        aria-controls={moreOpen ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={moreOpen ? "true" : undefined}
                        onClick={handleDelete}
                      >
                        <MoreHoriz />
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={deleteRow}
                        open={moreOpen}
                        onClose={handleDeleteClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        // sx={styles.menuCard}
                      >
                        <MenuItem onClick={handleDeleteClose}>
                          <Delete /> Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardPage;
