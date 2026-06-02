import { Wrapper, Level } from './Difficulty.styled';

export const Difficulty = ({ difficulty }) => {
  return (
    <Wrapper>
      <Level $type="#4caf50" $active={difficulty === 0}>
        Easy
      </Level>

      <Level $type="#ff9800" $active={difficulty === 1}>
        Medium
      </Level>

      <Level $type="#f44336" $active={difficulty === 2}>
        Hard
      </Level>
    </Wrapper>
  );
};