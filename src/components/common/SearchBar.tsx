import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  onChange: (value: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <div className={"search-bar-container"}>
      <FontAwesomeIcon icon={faSearch} />
      <input
        type={"text"}
        placeholder={"Search with name..."}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
