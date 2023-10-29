import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 bg-base-100 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-lg normal-case">
            <Image src={logo} alt="logo" height={40} width={40} />
            Flowmazon
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
