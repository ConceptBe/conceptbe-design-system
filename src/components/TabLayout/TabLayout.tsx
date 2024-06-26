import styled from '@emotion/styled';
import { Children, ReactElement, ReactNode, useState } from 'react';

import Tab from './Tab';
import { convertCSS } from '../../utils/convertCSS';

interface TabProps {
  label: string;
  children: ReactNode;
}

interface Props {
  width?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  maxHeight?: number | string;
  tabBoxHeight?: number | string;
  children: ReactNode;
}

const TabLayout = ({
  width,
  maxWidth,
  height,
  maxHeight,
  tabBoxHeight = 50,
  children,
  ...attributes
}: Props) => {
  const childrenElements = Children.toArray(
    children,
  ) as ReactElement<TabProps>[];
  const [position, setPosition] = useState(0);

  return (
    <Wrapper width={width} maxWidth={maxWidth} {...attributes}>
      <TabBoxesWrapper tabBoxHeight={tabBoxHeight}>
        {childrenElements.map((children, idx) => (
          <TabBox
            key={children.key}
            active={position === idx}
            onClick={() => setPosition(idx)}
          >
            {children.props.label || idx + 1}
          </TabBox>
        ))}
      </TabBoxesWrapper>
      {childrenElements.map(
        (children, idx) =>
          position === idx && (
            <TabPanel key={children.key} height={height} maxHeight={maxHeight}>
              {children}
            </TabPanel>
          ),
      )}
    </Wrapper>
  );
};

TabLayout.Tab = Tab;

export default TabLayout;

const Wrapper = styled.div<Partial<Props>>`
  width: ${({ width }) => width && convertCSS(width)};
  max-width: ${({ maxWidth }) => maxWidth && convertCSS(maxWidth)};
  margin: 0 auto;
  position: relative;
`;

const TabBoxesWrapper = styled.div<{ tabBoxHeight: number | string }>`
  width: 100%;
  height: ${({ tabBoxHeight }) => tabBoxHeight && convertCSS(tabBoxHeight)};
  display: flex;
  background: ${({ theme }) => theme.color.w1};
`;

const TabBox = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 2px solid
    ${({ theme, active }) => (active ? theme.color.b : theme.color.w1)};
  transition: border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-sizing: border-box;
`;

const TabPanel = styled.div<Partial<Props>>`
  width: 100%;
  height: ${({ height }) => height && convertCSS(height)};
  max-height: ${({ maxHeight }) => maxHeight && convertCSS(maxHeight)};
`;
