import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import EUFlagIcon from "../EUFlagIcon ";
import RUFlagIcon from "../RUFlagIcon";
import USFlagIcon from "../USFlagIcon";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import { calculateConversion } from "../../../../utils/utils";

export function CurrencyMenuItem({ flagIncon, label }) {
  return (
    <ListItemIcon>
      {flagIncon}
      <Typography sx={{ ml: "10px" }} variant="h6">
        {label}
      </Typography>
    </ListItemIcon>
  );
}

export default function Convertor() {
  const [currencies, setCurrencies] = useState({
    USD_RUB: 0,
    USD_EUR: 0,
    EUR_RUB: 0,
  });

  const [numbers, setNumbers] = useState({
    contry1: "USD",
    num1: 0,
    contry2: "RUB",
    num2: 0,
  });

  useEffect(() => {
    async function getMoney() {
      const response = await fetch(
        "https://status.neuralgeneration.com/api/currency"
      );

      const data = await response.json();
      console.log(data);
      const {
        "usd-rub": USD_RUB,
        "usd-eur": USD_EUR,
        "eur-rub": EUR_RUB,
      } = data;
      setCurrencies({
        USD_RUB: USD_RUB.toFixed(2),
        USD_EUR: USD_EUR.toFixed(2),
        EUR_RUB: EUR_RUB.toFixed(2),
      });
    }

    setNumbers({
      ...numbers,
      num2: calculateConversion(
        numbers.num1,
        numbers.contry1,
        numbers.contry2,
        currencies
      ),
    });

    getMoney();
  }, [numbers.num1, numbers.contry1, numbers.contry2, currencies]);

  return (
    <Box>
      <form style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <Box>
          <Select
            value={numbers.contry1}
            size="small"
            onChange={(event) =>
              setNumbers({ ...numbers, contry1: event.target.value })
            }
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
          <TextField
            value={numbers.num1}
            onChange={(event) =>
              setNumbers({ ...numbers, num1: event.target.value })
            }
            type="number"
            size="medium"
            sx={{ ml: 2 }}
          />
        </Box>
        <Button>
          <FlipCameraAndroidIcon />
        </Button>
        <Box>
          <Select
            defaultValue="RUB"
            value={numbers.contry2}
            size="small"
            onChange={(event) =>
              setNumbers({ ...numbers, contry2: event.target.value })
            }
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
          <TextField
            disabled
            value={numbers.num2}
            onChange={(event) =>
              setNumbers({ ...numbers, num2: event.target.value })
            }
            type="number"
            size="medium"
            sx={{
              ml: 2,
            }}
          />
        </Box>
      </form>
    </Box>
  );
}
