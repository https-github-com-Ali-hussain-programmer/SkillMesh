import { Category, Users } from "../../utils/data";

export default function search(value) {
  const categoryResults =
    Category?.filter((c) => {
      if (c?.name === value) {
        return true;
      } else {
        return false;
      }
    }) || [];
  const userResults = User?.filter((u) => u?.includes(value)) || [];
  const subCategoryResults =
    Category?.flatMap((c) => c.subfields?.filter((s) => s?.includes(value))) ||
    [];

  return [...categoryResults, ...userResults, ...subCategoryResults];
}
