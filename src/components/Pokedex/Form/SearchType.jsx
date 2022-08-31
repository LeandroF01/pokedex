import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";

export const SearchType = ({ setType }) => {
  const [listTypes, setListTypes] = useState();
  const { Option } = Select;

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type/";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setListTypes(data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setType(e.toLowerCase());
  };

  return (
    <Input.Group compact>
      <Select onChange={handleChange} defaultValue="All">
        {listTypes?.map((type) => (
          <Option key={type.name} value={type.name}>
            {type.name}
          </Option>
        ))}
      </Select>
    </Input.Group>
  );
};
