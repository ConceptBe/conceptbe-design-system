import { Meta, StoryObj } from '@storybook/react';

import {
  PNGAgreementBackground,
  PNGBottomBackground,
  PNGIdeaBackground1,
  PNGIdeaBackground2,
  PNGIdeaBackground3,
  PNGIdeaBackground4,
  PNGIdeaBackground5,
} from '../.';

const meta = {
  title: 'Assets/PNG/Common',
  tags: ['autodocs'],
} as Meta<object>;

export default meta;
type Story = StoryObj<object>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <div>
        <img
          width={331}
          height={331}
          src={PNGAgreementBackground}
          alt="PNGAgreementBackground"
        />
        <img
          width={375}
          height={75}
          src={PNGBottomBackground}
          alt="PNGBottomBackground"
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <img
          width={140}
          height={180}
          src={PNGIdeaBackground1}
          alt="PNGIdeaBackground1"
        />
        <img
          width={140}
          height={180}
          src={PNGIdeaBackground2}
          alt="PNGIdeaBackground2"
        />
        <img
          width={140}
          height={180}
          src={PNGIdeaBackground3}
          alt="PNGIdeaBackground3"
        />
        <img
          width={140}
          height={180}
          src={PNGIdeaBackground4}
          alt="PNGIdeaBackground4"
        />
        <img
          width={140}
          height={180}
          src={PNGIdeaBackground5}
          alt="PNGIdeaBackground5"
        />
      </div>
    </div>
  ),
};
