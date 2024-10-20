import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'reduxtoolkit/slices/filterSlice';
import { Input, FormLabel, Box } from '@chakra-ui/react';
import { selectFilter } from 'reduxtoolkit/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box mt={4}>
      <FormLabel>Find contact by name:</FormLabel>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
      />
    </Box>
  );
};

export default Filter;
