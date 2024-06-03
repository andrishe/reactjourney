import Link from "next/link";
import clx from "clsx";

export const MenuFilter = ({ filters, currentFilter }) => {
  return (
    <aside className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <MenuItem isActive={currentFilter} filter="" key="filter">
        All
      </MenuItem>

      {filters.map((filter) => (
        <MenuItem
          key={filter}
          filter={filter}
          isActive={filter === currentFilter}
        >
          {filter}
        </MenuItem>
      ))}
    </aside>
  );
};

const MenuItem = ({ filter, children, isActive }) => {
  return (
    <Link
      key={filter}
      className={clx(
        "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-100",
        { "font-bold": isActive }
      )}
      href={`/?filter=${filter}`}
    >
      {children}
    </Link>
  );
};
