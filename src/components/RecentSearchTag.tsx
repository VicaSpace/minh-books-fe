import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import React from 'react';

interface RecentSearchTagProps {
  label: string;
}

const RecentSearchTag: React.FC<RecentSearchTagProps> = ({ label }) => {
  return (
    <Tag
      size="lg"
      key="lg"
      borderRadius="full"
      variant="solid"
      colorScheme="white"
      border="1px solid #D6D6D6"
      marginRight={'20px'}
      marginBottom="10px"
    >
      <TagLabel color="black">{label}</TagLabel>
      <TagCloseButton color="black" />
    </Tag>
  );
};

export default RecentSearchTag;
