import { Category, Users } from "../../utils/data";

export default function search(value, type) {
  

  const lowercasedValue = value.toLowerCase();
  if (type === "User") {
    const userResults =
      Users?.filter((u) =>
        u.username.toLowerCase().includes(lowercasedValue)
      ) || [];
      return userResults;
  } else if (type === "Category") {
    const categoryResults =
      Category?.filter((c) => c?.category.toLowerCase() === lowercasedValue) ||
      [];
      return categoryResults;
  } else {
    const subCategoryResults =
      Category?.flatMap(
        (c) =>
          c.subfields?.filter((s) =>
            s.toLowerCase().includes(lowercasedValue)
          ) || []
      ) || [];
      return subCategoryResults
  }

 
}
