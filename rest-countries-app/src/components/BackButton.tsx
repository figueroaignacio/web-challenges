import {Link} from "react-router-dom";
import {ArrowLeft} from "./Icons.tsx";

export function BackButton() {
  return (
    <Link to="/" className="border-[1px] border-border py-2 px-4 rounded-md flex items-center gap-3">
      <ArrowLeft/>
      Back to all Countries
    </Link>
  );
}
