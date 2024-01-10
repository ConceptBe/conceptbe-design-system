import styled from '@emotion/styled';
import { ReactNode } from 'react';

export interface Props {
  label: string;
  children: ReactNode;
}

const Tab = ({ label, children, ...attributes }: Props) => {
  return (
    <Wrapper id={label} {...attributes}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Tab;
