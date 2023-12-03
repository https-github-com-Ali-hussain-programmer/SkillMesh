import { Category, User } from "../../utils/data";

export default function search(value) {
  const categoryResults = Category.filter((c) => c.includes(value));
  const userResults = User.filter((u) => u.includes(value));

  return categoryResults.concat(userResults);
}
