import { useSelector } from 'react-redux';
import clsx from 'clsx';

import cls from './CurrencyName.module.scss';
import { getCurrencyName } from '../model/selectors/getCurrencyName';
import { useGetCurrency } from '@/features/CurrencySelect';

interface CurrencyNameProps {
  className?: string;
}

const CurrencyName = ({ className }: CurrencyNameProps) => {
  const { data, isLoading, isError } = useGetCurrency();
  const currencyName = useSelector(getCurrencyName);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={clsx(cls.currencyName, className)}>
      <p>{currencyName ? currencyName : data[0]?.name}</p>
    </div>
  );
};

export default CurrencyName;
