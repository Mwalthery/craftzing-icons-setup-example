import { DuocolorIconNames } from '/types/icon-names';
import classNames from 'classnames';
import styles from './DuocolorIcon.module.scss';

interface DuocolorIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  name: DuocolorIconNames;
  size?: 32 | 40 | 48 | 64 | 72 | 80;
  variant?: 'mono' | 'accent';
  color?: string;
}

const DuocolorIcon = ({
  name,
  className,
  color,
  size = 40,
  variant = 'accent',
  ...props
}: DuocolorIconProps) => {
  return (
    <svg
      {...props}
      color={color}
      aria-hidden={!props.hasOwnProperty('aria-label') && !props.hasOwnProperty('aria-labelledby')}
      className={classNames(styles['duocolor-icon'], styles[`duocolor-icon--${size}`], className)}>
      <use href={`/icons/duocolor/${variant}/${size < 64 ? '40' : '64'}/${name}.svg#icon`} />
    </svg>
  );
};

export default DuocolorIcon;
