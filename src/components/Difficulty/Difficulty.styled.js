import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 6px;
  margin: 12px;
`;

export const Level = styled.span`
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;

  background-color: ${({ $active, $type }) =>
    $active ? $type : '#eee'};

  color: ${({ $active }) => ($active ? 'white' : '#666')};
`;