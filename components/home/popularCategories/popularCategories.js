import React from "react";
import styled from "./popularCategories.module.css";
import Link from "next/link";
function PopularCategories(props) {
  const { categories } = props;

  return (
    <div className={styled["container"]}>
      <p className={styled["heading"]}>TOP CATEGORIES</p>
      <ul className={styled["categories"]}>
        {categories.map((category) => {
          const { id, title } = category;
          return (
            <li key={id} className={styled["category"]}>
              <Link href={""}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopularCategories;
