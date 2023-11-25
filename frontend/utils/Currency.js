function Currency(price, Quantity=1) {
  Quantity < 1 ? (Quantity = 1) : Quantity;
  const formatted = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price * Quantity);

  const modifiedString = formatted
    .split("")
    .filter((char) => char !== "R" && char !== "s")
    .join("");

  return modifiedString;
}

export default Currency;
