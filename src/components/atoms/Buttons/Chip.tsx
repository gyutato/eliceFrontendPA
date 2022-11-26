import styled from '@emotion/styled';

type ChipContainerProps = {
  isClicked: boolean;
};
const ChipContainer = styled.button<ChipContainerProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 4px 12px;
  margin: 8px;
  background-color: ${(props) =>
    props.isClicked ? 'rgb(82, 79, 161)' : 'rgb(240, 241, 243)'};
  color: ${(props) => (props.isClicked ? 'white' : 'rgb(94, 95, 97);')};
  font-size: 14px;
  border: ${(props) =>
    props.isClicked ? 'rgb(82, 79, 161)' : 'rgb(240, 241, 243)'};
  border-radius: 32px;
  &:hover {
    color: ${(props) => (props.isClicked ? 'white' : 'rgb(0, 0, 0)')};
    background: ${(props) =>
      props.isClicked ? 'rgb(66, 63, 140);' : 'rgb(225, 226, 228);'};
    border-color: ${(props) =>
      props.isClicked ? 'rgb(66, 63, 140);' : 'rgb(225, 226, 228);'};
  }
`;
type ChipProps = {
  name: string;
  isClicked: boolean;
};

const Chip = (props: ChipProps): JSX.Element => {
  const { name, isClicked } = props;
  return (
    <ChipContainer className="chip" name={name} isClicked={isClicked}>
      {name === 'free' ? '무료' : '유료'}
    </ChipContainer>
  );
};
export default Chip;
