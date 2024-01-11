import styled from '@emotion/styled';

import { ReactComponent as SVGCancel } from '../../assets/svg/cancel.svg';
import Spacer from '../Spacer/Spacer';
import Text from '../Text/Text';

interface TagProps {
  children: string;
  onDelete: (name: string) => void;
}

const Tag = ({ children, onDelete, ...attributes }: TagProps) => {
  return (
    <Wrapper {...attributes}>
      <Text font="suit13m" color="w1" style={{ fontWeight: 400 }}>
        {children}
      </Text>
      <Spacer size={10} />
      <SVGWrapper onClick={() => onDelete(children)}>
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
