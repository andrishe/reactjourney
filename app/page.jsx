import { REACT_CARDS } from "@/src/react-card";
import Header from "../src/Header";
import { MenuFilter } from "@/src/MenuFilter";
import { CardItems } from "@/src/CardItems";

export default function Home({ searchParams }) {
  const currentFilter = searchParams.filter;
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];

  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 p-2 overflow-auto max-lg:flex-col">
        <MenuFilter filters={filters} currentFilter={currentFilter} />
        <div className="size-full overflow-auto">
          <div className="grid grid-cols-1 h-fit w-full md:grid-cols-2 lg:grid-cols-3 gap-4">
            {REACT_CARDS.filter((items) => {
              if (!currentFilter) return true;
              return items.category === currentFilter;
            }).map((items) => (
              <CardItems
                hideCategory={currentFilter}
                items={items}
                key={items.name}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
