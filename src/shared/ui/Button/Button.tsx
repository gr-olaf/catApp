import clsx from 'clsx';
import { PropsWithChildren, ReactNode } from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends PropsWithChildren {
  className?: string;
  addonRight?: ReactNode;
}

const Button = ({ children, className, addonRight }: ButtonProps) => {
  return (
    <button className={clsx(cls.button, className)}>
      {children}
      <div className={cls.addonRight}>{addonRight}</div>
    </button>
  );
};

export default Button;
