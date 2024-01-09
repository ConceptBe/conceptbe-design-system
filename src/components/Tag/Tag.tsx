import styled from '@emotion/styled';

import { ReactComponent as SVGCancel } from '../../assets/svg/x.svg';
import Spacer from '../Spacer/Spacer';
import Text from '../Text/Text';

interface TagProps {
  name: string;
  onDelete: (name: string) => void;
}

const Tag = ({ name, onDelete }: TagProps) => {
  return (
    <Wrapper data-testid="tag">
      <Text font="suit13m" color="w1" customStyle={{ fontWeight: 400 }}>
        {name}
      </Text>
      <Spacer size={10} />
      <SVGWrapper onClick={() => onDelete(name)}>
        <SVGCancel />
      </SVGWrapper>
    </Wrapper>
  );
};

export default Tag;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.c1};
`;

const SVGWrapper = styled.div`
  color: ${({ theme }) => theme.color.w1};
  cursor: pointer;
`;
