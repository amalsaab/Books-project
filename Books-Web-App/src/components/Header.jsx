import React from "react";

function Header() {
  return (
    <div
      style={{ backgroundImage: `url(${headphone})` }}
      className="border w-[929px] h-48 bg-contain bg-no-repeat mb-5 bg-[#F8F8F8] flex items-center p-8 gap-12"
    >
      <div className="flex flex-col w-[22rem] gap-4 text-gray-600">
        <h1 className="text-4xl font-normal">
          Bose Bluetooth Wireless Headphones
        </h1>
        <h1>
          Crisp powerful sound from the best sounding wireless headphone in its
          class
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-gray-400">$260.50</p>
          <p className="text-green-700 text-2xl">$219.05</p>
        </div>
        <Button text="Shop Now" />
      </div>
    </div>
  );
}

export default Header;
