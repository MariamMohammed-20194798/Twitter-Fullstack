import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Form, DivSearch, DivIcon, Input } from "./SearchBarStyled";
const SearchBar = () => {
  return (
    <Form>
      <DivSearch>
        <DivIcon>
          <IoIosSearch />
        </DivIcon>
        <div style={{ width: "100%" }}>
          <Input type="text" placeholder="Search Twitter" />
        </div>
      </DivSearch>
    </Form>
  );
};

export default SearchBar;
