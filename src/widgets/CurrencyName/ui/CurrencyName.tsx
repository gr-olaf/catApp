import clsx from 'clsx';
import cls from './CurrencyName.module.scss';

interface CurrencyNameProps {
  className?: string;
}

const CurrencyName = ({ className }: CurrencyNameProps) => {
  return (
    <div className={clsx(cls.currencyName, className)}>
      <p>Russian Rubble</p>
    </div>
  );
};

export default CurrencyName;
