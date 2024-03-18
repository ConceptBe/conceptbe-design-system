import styled from '@emotion/styled';
import { ImgHTMLAttributes, SyntheticEvent } from 'react';

import { convertCSS } from '../..';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  objectFit?: string;
  borderRadius?: number | string;
  ratio?: string;
  defaultSrc?: string;
}
const ImageView = ({
  src,
  alt,
  width = '100%',
  height = '100%',
  maxWidth,
  maxHeight,
  objectFit = 'cover',
  borderRadius,
  ratio,
  defaultSrc,
}: Props) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      objectFit={objectFit}
      borderRadius={borderRadius}
      ratio={ratio}
      onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
        if (defaultSrc) e.currentTarget.src = defaultSrc;
      }}
    />
  );
};

const StyledImage = styled.img<Props>`
  display: block;
  width: ${({ width }) => width && convertCSS(width)};
  height: ${({ height }) => height && convertCSS(height)};
  max-width: ${({ maxWidth }) => maxWidth && convertCSS(maxWidth)};
  max-height: ${({ maxHeight }) => maxHeight && convertCSS(maxHeight)};
  object-fit: ${({ objectFit }) => objectFit};
  border-radius: ${({ borderRadius }) =>
    borderRadius && convertCSS(borderRadius)};
  aspect-ratio: ${({ ratio }) => ratio};
`;

export default ImageView;
