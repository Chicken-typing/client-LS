import classNames from 'classnames';
import { FC } from 'react';

interface IBadgeProps {
  discount: number;
  color?: 'primary' | 'danger' | 'warning' | 'soft-primary' | 'soft-danger' | 'soft-warning';
  className?: string;
  circle?: boolean;
}

export const Badge: FC<IBadgeProps> = ({ discount, color, circle, className }) => {
  return (
    <span className={classNames('ks-badge', `-${color}`, { '-circle': circle }, className)}>
      {discount}% OFF
    </span>
  );
};

Badge.defaultProps = {
  discount: 0,
  color: 'primary',
  className: '',
  circle: false,
};
