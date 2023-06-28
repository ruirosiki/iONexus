import { Link } from "react-router-dom";
import NewItemForm from "../NewItemForm/NewItemForm";

export default function NewItemButton() {
  return (
    <Link to="/inventory/new">
      <button>New Item</button>
    </Link>
  );
}
