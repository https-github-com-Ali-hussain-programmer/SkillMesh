import { store } from "../redux/store/store";
import { setETH } from "../redux/slice/exchangeSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const apiKey = "07b747d446msh76753c437ff5070p197824jsn43a820e470be";

export const useCurrencyRate = () => {
  const dispatch = useDispatch();

  const getCurrency = async () => {
    const url =
      "https://crypto-market-prices.p.rapidapi.com/exchanges/binance/ETH";
    const params = new URLSearchParams({ base: "USD" });

    try {
      const response = await fetch(`${url}?${params}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "crypto-market-prices.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      dispatch(setETH(data.data.price));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    getCurrency();
  }, []);
};
