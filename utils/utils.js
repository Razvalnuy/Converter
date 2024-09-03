function calculateConversion(num1, country1, country2, currencies) {
  if (country1 === country2) {
    return (num1 * 1).toFixed(2);
  } else if (country1 === "USD" && country2 === "RUB") {
    return (num1 * currencies.USD_RUB).toFixed(2);
  } else if (country1 === "EUR" && country2 === "RUB") {
    return (num1 * currencies.EUR_RUB).toFixed(2);
  } else if (country1 === "EUR" && country2 === "USD") {
    return (num1 / currencies.USD_EUR).toFixed(2);
  } else if (country1 === "USD" && country2 === "EUR") {
    return (num1 * currencies.USD_EUR).toFixed(2);
  } else if (country1 === "RUB" && country2 === "EUR") {
    return (num1 / currencies.EUR_RUB).toFixed(2);
  } else if (country1 === "RUB" && country2 === "USD") {
    return (num1 / currencies.USD_RUB).toFixed(2);
  }
  return 0;
}

export { calculateConversion };
