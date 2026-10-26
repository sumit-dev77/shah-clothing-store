import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import {
  Search,
  UserRound,
  ShoppingBag,
  House,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const cartcount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="w-full bg-[#E8E7E3] text-black relative z-50">
      <div className="hidden md:grid h-24 px-12 grid-cols-3 items-center">

        <div className="flex items-center gap-9">

          <Link
            to="/men"
            className="text-sm font-semibold tracking-wide hover:opacity-50 transition" >
            MEN
          </Link>

          <Link
            to="/women"
            className="text-sm font-semibold tracking-wide hover:opacity-50 transition" >
            WOMEN
          </Link>

          <Link
            to="/kids"
            className="text-sm font-semibold tracking-wide hover:opacity-50 transition">
            KIDS
          </Link>

        </div>
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex items-center justify-end gap-8">
          <div className="flex items-center gap-2 border-b border-black">

            <Search
              size={22}
              strokeWidth={1.5} />

            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  search.trim() !== ""
                ) {
                  navigate(
                    `/search?search=${encodeURIComponent(
                      search.trim()
                    )}`
                  );
                }
              }}
              className="w-32 bg-transparent outline-none py-2 text-sm" />

          </div>
          <button className="flex items-center gap-2 text-sm font-semibold hover:opacity-50 transition">
            <UserRound
              size={25}
              strokeWidth={1.5}/>
            <span>LOGIN</span>
          </button>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold hover:opacity-50 transition">
            <House
              size={25}
              strokeWidth={1.5} />
            <span>HOME</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 text-sm font-semibold hover:opacity-50 transition" >
            <ShoppingBag
              size={25}
              strokeWidth={1.5} />

            <span>CART</span>

            <span className="text-xs">
              ({cartcount})
            </span>
          </Link>
        </div>
      </div>
      <div className="md:hidden h-20 px-5 flex items-center justify-between">

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2" >
          {menuOpen ? (
            <X size={25} strokeWidth={1.5} />
          ) : (
            <Menu size={25} strokeWidth={1.5} />
          )}
        </button>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>
        <Link
          to="/cart"
          className="relative p-2" >
          <ShoppingBag
            size={25}
            strokeWidth={1.5}/>

          {cartcount > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartcount}
            </span>
          )}
        </Link>

      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#E8E7E3] border-t border-gray-300">

          <div className="px-6 py-6 flex flex-col">
            <Link
              to="/men"
              onClick={() => setMenuOpen(false)}
              className="py-4 border-b border-gray-300 text-sm font-semibold tracking-wider" >
              MEN
            </Link>

            <Link
              to="/women"
              onClick={() => setMenuOpen(false)}
              className="py-4 border-b border-gray-300 text-sm font-semibold tracking-wider" >
              WOMEN
            </Link>

            <Link
              to="/kids"
              onClick={() => setMenuOpen(false)}
              className="py-4 border-b border-gray-300 text-sm font-semibold tracking-wider" >
              KIDS
            </Link>
            <div className="flex items-center gap-3 border-b border-gray-400 py-4">

              <Search
                size={21}
                strokeWidth={1.5}/>

              <input
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    search.trim() !== ""
                  ) {
                    navigate(
                      `/search?search=${encodeURIComponent(
                        search.trim()
                      )}`
                    );

                    setMenuOpen(false);
                  }
                }}
                className="w-full bg-transparent outline-none text-sm" />

            </div>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-4 text-sm font-semibold"
            >
              <House size={21} strokeWidth={1.5} />
              HOME
            </Link>
            <button
              className="flex items-center gap-3 py-4 text-sm font-semibold"
            >
              <UserRound
                size={21}
                strokeWidth={1.5}
              />
              LOGIN
            </button>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;