import { UiIconNames } from '@/types/icon-names';
import classNames from 'classnames';

import styles from './UiIcon.module.scss';

interface UiIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  name: UiIconNames;
  size?: 16 | 20 | 24 | 32;
}

const UiIcon = ({ name, className, size = 24, ...props }: UiIconProps) => (
  <svg
    {...props}
    aria-hidden={!props.hasOwnProperty('aria-label') && !props.hasOwnProperty('aria-labelledby')}
    className={classNames(styles['ui-icon'], styles[`ui-icon--${size}`], className)}>
    <use href={`/icons/sprite.svg#${name}`} />
  </svg>
);

export default UiIcon;
