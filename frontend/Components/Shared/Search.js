import { useSelector } from "react-redux";
const Users = [];
export default function search(value, type) {
  const Category = useSelector((state) => state?.category);

  const lowercasedValue = value.toLowerCase();
  if (type === "User") {
    const userResults =
      Users?.filter((u) =>
        u.username.toLowerCase().includes(lowercasedValue)
      ) || [];
    return userResults;
  } else if (type === "Category") {
    const categoryResults =
      Category?.filter(
        (c) => c?.categoryName.toLowerCase() === lowercasedValue
      ) || [];
    return categoryResults;
  } else {
    const subCategoryResults =
      Category?.flatMap(
        (c) =>
          c.subField?.filter((s) =>
            s.name.toLowerCase().includes(lowercasedValue)
          ) || []
      ) || [];
    return subCategoryResults;
  }
}
