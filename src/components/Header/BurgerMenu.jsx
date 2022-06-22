import React from "react";

export const BurgerMenu = () => {
  const ListMenu = [
    { name: "Bags" },
    { name: "Accessories" },
    { name: "Denim" },
    { name: "T - Shirts" },
  ];
  const List = (
    <ul>
      {ListMenu.map((item) => (
        <li key={item.name}>
          <a href="/">{item.name}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <label htmlFor="menu">X</label>
      <h2>MENU</h2>
      <h3>MAN</h3>
      <>{List}</>
      <h3>WOMAN</h3>
      <>{List}</>
      <h3>KIDS</h3>
      <>{List}</>
    </div>
  );
};
