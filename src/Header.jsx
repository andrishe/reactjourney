import React from "react";
import ReactSvg from "./ReactSvg";
import { Button } from "./Button";
import { ShoppingBasket, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        <ReactSvg size="24" />
        <span>ReactJourney</span>
      </h1>
      <div className="flex items-center ml-auto gap-2">
        <Button>
          <ShoppingBasket size="24" />
        </Button>

        <Button>
          <User size="24" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
