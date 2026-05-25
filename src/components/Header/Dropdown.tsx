import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Dropdown = ({
  menuItem,
  stickyMenu,
  variant = "desktop",
}: {
  menuItem: { title: string; submenu: { title: string; path: string }[] };
  stickyMenu: boolean;
  variant?: "mobile" | "desktop";
}) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();
  const isActive = pathUrl.includes(menuItem.title);
  const isMobile = variant === "mobile";

  return (
    <li
      onClick={() => isMobile && setDropdownToggler(!dropdownToggler)}
      className={`group relative ${!isMobile ? "before:absolute before:left-0 before:top-0 before:h-[3px] before:w-0 before:rounded-b-[3px] before:bg-green-600 before:duration-200 before:ease-out hover:before:w-full" : ""} ${
        isActive && !isMobile && "before:!w-full"
      }`}
    >
      <a
        href="#"
        onClick={(e) => {
          if (isMobile) {
            e.preventDefault();
            setDropdownToggler(!dropdownToggler);
          }
        }}
        className={`flex items-center gap-1.5 capitalize ${
          isMobile
            ? "neo-brutal-sm rounded-brutal border-2 border-ink bg-white px-4 py-3 text-custom-sm font-bold text-ink"
            : `text-custom-sm font-semibold text-ink hover:text-green-600 ${stickyMenu ? "xl:py-4" : "xl:py-6"}`
        } ${isActive && !isMobile ? "!text-green-600" : ""}`}
      >
        {menuItem.title}
        <svg
          className={`fill-current cursor-pointer transition-transform duration-200 ${
            dropdownToggler && isMobile ? "rotate-180" : ""
          }`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.95363 5.67461C3.13334 5.46495 3.44899 5.44067 3.65866 5.62038L7.99993 9.34147L12.3412 5.62038C12.5509 5.44067 12.8665 5.46495 13.0462 5.67461C13.2259 5.88428 13.2017 6.19993 12.992 6.37964L8.32532 10.3796C8.13808 10.5401 7.86178 10.5401 7.67453 10.3796L3.00787 6.37964C2.7982 6.19993 2.77392 5.88428 2.95363 5.67461Z"
            fill=""
          />
        </svg>
      </a>

      <ul
        className={`dropdown ${dropdownToggler && "flex"} ${
          isMobile ? "!relative !mt-2 !translate-y-0 !opacity-100 !visible ml-2 gap-1 border-l-2 border-ink/20 pl-3 shadow-none" : ""
        }`}
      >
        {menuItem.submenu.map((item, i) => (
          <li key={i}>
            <Link
              href={item.path}
              className={`flex text-custom-sm py-[7px] px-4.5 font-medium transition-colors ${
                isMobile
                  ? "rounded-brutal border-2 border-transparent hover:border-ink hover:bg-cream"
                  : "hover:bg-cream hover:text-green-600"
              } ${pathUrl === item.path ? "font-bold text-green-600 bg-cream" : "text-ink"}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
