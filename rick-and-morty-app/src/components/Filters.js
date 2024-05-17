import React, { useState } from 'react';
import { Input, Select } from 'antd';

const { Option } = Select;

const Filters = ({ onFilterChange }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ name, status, gender });
  };

  return (
    <div>
      <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} onBlur={handleFilterChange} />
      <Select placeholder="Status" value={status} onChange={value => { setStatus(value); handleFilterChange(); }}>
        <Option value="">All</Option>
        <Option value="alive">Alive</Option>
        <Option value="dead">Dead</Option>
        <Option value="unknown">Unknown</Option>
      </Select>
      <Select placeholder="Gender" value={gender} onChange={value => { setGender(value); handleFilterChange(); }}>
        <Option value="">All</Option>
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
        <Option value="genderless">Genderless</Option>
        <Option value="unknown">Unknown</Option>
      </Select>
    </div>
  );
};

export default Filters;
