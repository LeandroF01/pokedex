import { Input, Select } from "antd";
import "antd/dist/antd.css";
import { useCallback } from "react";

const SelectCant = ({ setLimit, limit }) => {
  const { Option } = Select;

  const handleMenuClick = useCallback((value) => {
    setLimit(value);
  });

  return (
    <Input.Group compact>
      <Select onChange={handleMenuClick} defaultValue={limit}>
        <Option value="4">4</Option>
        <Option value="8">8</Option>
        <Option value="12">12</Option>
        <Option value="16">16</Option>
        <Option value="20">20</Option>
      </Select>
    </Input.Group>
  );
};
export default SelectCant;
