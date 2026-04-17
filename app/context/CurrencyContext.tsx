"use client";

import { createContext, ReactNode, useState } from "react";
import { Currency } from "@/utils/types";

interface CurrencyContextType {
  currency: Currency;
  toggleCurrency: () => void;
  formatPrice: (priceBaht: number, priceBirr: number) => string;
  getPrice: (priceBaht: number, priceBirr: number) => number;
  symbol: string;
}

export const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

export default function CurrencyContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currency, setCurrency] = useState<Currency>("ETB");

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "ETB" ? "THB" : "ETB"));
  };

  const symbol = currency === "ETB" ? "Br" : "฿";

  const getPrice = (priceBaht: number, priceBirr: number) => {
    return currency === "ETB" ? priceBirr : priceBaht;
  };

  const formatPrice = (priceBaht: number, priceBirr: number) => {
    const price = getPrice(priceBaht, priceBirr);
    return `${symbol} ${price.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, toggleCurrency, formatPrice, getPrice, symbol }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}
