import React from "react";
import { Input, Select } from "antd";
import { useFetchType } from "../../hooks/Fetch/useFetchType";

const SearchType = ({ setType }) => {
  const listTypes = useFetchType();

  const { Option } = Select;

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
export default SearchType;
