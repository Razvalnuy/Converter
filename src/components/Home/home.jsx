import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [currencies, setCurrencies] = useState({
    USD_RUB: 0,
    USD_EUR: 0,
    EUR_RUB: 0,
  });

  const currency = useSelector((state) => state.currencies.currency);

  useEffect(() => {
    setLoading(true);
    async function getMoney() {
      const response = await fetch(
        "https://status.neuralgeneration.com/api/currency"
      );

      const data = await response.json();
      console.log(data);
      setLoading(false);

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
    getMoney();
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "100px" }}>
      {loading ? (
        <Typography variant="h4">Загружаю...</Typography>
      ) : (
        <Typography variant="h4">
          {currency === "RUB" ? (
            <>
              1 USD = {currencies.USD_RUB} {currency}
              <br />1 EUR = {currencies.EUR_RUB} {currency}
            </>
          ) : currency === "USD" ? (
            <>
              1 RUB = {(1 / currencies.USD_RUB).toFixed(2)} {currency}
              <br />1 EUR = {currencies.USD_EUR} {currency}
            </>
          ) : currency === "EUR" ? (
            <>
              1 RUB = {(1 / currencies.EUR_RUB).toFixed(2)} {currency}
              <br />1 USD = {currencies.USD_EUR} {currency}
            </>
          ) : null}
        </Typography>
      )}
    </Box>
  );
}
