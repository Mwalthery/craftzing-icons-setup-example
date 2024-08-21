import DuocolorIcon from '.';

import { duoColorIconNamesArray } from '../../../types/icon-names';

const DuocolorIconStory = {
  title: 'Atoms/Icons/Duocolor Icons',
  component: DuocolorIcon,
};

const Template = () => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '1rem',
        color: '#2d3131',
        margin: '0',
        padding: '0',
      }}>
      {duoColorIconNamesArray.map((iconName, key) => (
        <DuocolorIcon key={key} size={64} name={iconName} />
      ))}
    </ul>
  );
};

const DuoColorIcon = (args) => {
  return <DuocolorIcon {...args} />;
};

export const All = Template.bind({});

export const Mono = DuoColorIcon.bind({});

export const Accent = DuoColorIcon.bind({});

export default DuocolorIconStory;

Mono.args = {
  name: 'Code',
  size: 64,
  color: '#ff4612',
  variant: 'mono',
};

Accent.args = {
  name: 'Company',
  size: 64,
  color: '#009eb4',
  variant: 'accent',
};

Mono.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['mono', 'accent'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: [32, 40, 48, 64, 72, 80],
    },
  },
};

Mono.argTypes = Accent.argTypes;
