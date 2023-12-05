import { Category, Users } from "../../utils/data";

export default function search(value) {
  if (value === "") return;
  const lowercasedValue = value.toLowerCase();

  const categoryResults =
    Category?.filter((c) => c?.category.toLowerCase() === lowercasedValue) ||
    [];

  const userResults =
    Users?.filter((u) => u.username.toLowerCase().includes(lowercasedValue)) ||
    [];

  const subCategoryResults =
    Category?.flatMap(
      (c) =>
        c.subfields?.filter((s) => s.toLowerCase().includes(lowercasedValue)) ||
        []
    ) || [];

  return [...categoryResults, ...userResults, ...subCategoryResults];
}
