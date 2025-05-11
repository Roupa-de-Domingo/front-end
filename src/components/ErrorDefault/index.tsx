import React from 'react';
import { Text } from './styles';

interface ErrorDefault {
  content: string;
}

export const ErrorDefault: React.FC<ErrorDefault> = ({ content }) => {
  return <Text>{content}</Text>;
};
