import React from 'react';
import { Flex, TextInput, SegmentedControl } from '@mantine/core';

interface SearchBarProps {
  filter: string | null;
  setFilter: (value: string | null) => void;
  ipSearch: string;
  setIpSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ filter, setFilter, ipSearch, setIpSearch }) => {
  return (
    <Flex
      gap="md"
      align="center"
      justify="start"
      wrap="wrap"
      style={{
        marginBottom: '2em',
      }}
    >
      {/* Search IP Address */}
      <TextInput
        placeholder="Search IP Address"
        value={ipSearch}
        onChange={(e) => setIpSearch(e.currentTarget.value)}
        style={{ width: 250 }}
        size="xs"
        radius="md"
        styles={{
          input: {
            backgroundColor: 'rgba(10,10,20,0.9)',
            borderColor: '#00cfff',
            color: '#00f0ff',
          },
        }}
      />

      {/* Filter by Severity (SegmentedControl) */}
      <SegmentedControl
        value={filter || ''}
        onChange={(value) => setFilter(value)}
        data={['Low', 'Medium', 'High', 'Critical']}
        size="xs"
        radius="md"
        style={{ backgroundColor: 'rgba(10,10,20,0.9)', border: '1px solid #00cfff', color: '#00f0ff', padding: '5px' }}
        styles={{
          label: {
            color: '#d1d1d1',
          },
          control: {
            backgroundColor: 'transparent',
            '&[data-active]': {
              backgroundColor: '#00cfff',
              color: '#0d0d1a',
            },
          },
        }}
      />
    </Flex>
  );
};

export default SearchBar;


