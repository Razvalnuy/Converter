import {
  AppBar,
  Toolbar,
  Button,
  Select,
  MenuItem,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import USFlagIcon from "../flags/USFlagIcon";
import EUFlagIcon from "../flags/EUFlagIcon ";
import RUFlagIcon from "../flags/RUFlagIcon";
import { CurrencyMenuItem } from "../flags/Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { updataCurrency } from "../../state/currenciesSlice";
import { Link, Outlet } from "react-router-dom";

export default function StaringPage() {
  const currency = useSelector((state) => state.currencies.currency);
  const dispatch = useDispatch();

  return (
    <>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/home">
            <Button variant="text" sx={{ color: "white" }}>
              Главная
            </Button>
          </Link>
          <Link to="convert">
            <Button variant="text" sx={{ color: "white" }}>
              Конвертация
            </Button>
          </Link>

          <Paper>
            <Select
              size="small"
              defaultValue={"RUB"}
              onChange={(event) => {
                const currentCurrency = event.target.value;
                dispatch(updataCurrency(currentCurrency));
              }}
            >
              <MenuItem value={"RUB"}>
                <CurrencyMenuItem label="RUB" flagIncon={<RUFlagIcon />} />
              </MenuItem>
              <MenuItem value={"EUR"}>
                <CurrencyMenuItem label="EUR" flagIncon={<EUFlagIcon />} />
              </MenuItem>
              <MenuItem value={"USD"}>
                <CurrencyMenuItem label="USD" flagIncon={<USFlagIcon />} />
              </MenuItem>
            </Select>
          </Paper>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <Typography variant="h6">Добро пожаловать!)</Typography>
      </Box>
      <Outlet />
    </>
  );
}
