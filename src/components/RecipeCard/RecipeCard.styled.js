import styled from 'styled-components';

export const Card = styled.li`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  width: 280px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  transition: 0.2s ease;

  border: ${({ $difficulty }) =>
    $difficulty === 2 ? '2px solid #f44336' : 'none'};

  transform: ${({ $difficulty }) =>
    $difficulty === 2 ? 'scale(1.03)' : 'scale(1)'};

  box-shadow: ${({ $difficulty }) =>
    $difficulty === 2
      ? '0 10px 25px rgba(244, 67, 54, 0.3)'
      : '0 8px 20px rgba(0, 0, 0, 0.1)'};
`;

export const Title = styled.h3`
  margin: 12px;
  font-size: 18px;
`;

export const Info = styled.p`
  margin: 0 12px 12px;
  color: #666;
  font-size: 14px;
`;