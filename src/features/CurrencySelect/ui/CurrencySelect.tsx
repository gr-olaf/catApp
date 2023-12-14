import { useDispatch, useSelector } from 'react-redux';

import { Currency, CurrencySchema } from '@/entities/Currency';
import { useGetCurrency } from '../api/currencySelectApi';
import { currencySelectActions } from '../model/slice/currencySelectSlice';
import { getSelectedCurrency } from '../model/selectors/getSelectedCurrency';

import cls from './CurrencySelect.module.scss';

const CurrencySelect = () => {
  const { data, isLoading, isError } = useGetCurrency();
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(getSelectedCurrency);

  const onChangeCurrency = (value: CurrencySchema) => {
    dispatch(currencySelectActions.selectCurrency(value));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Currency
      className={cls.currencySelect}
      items={data}
      defaultValue={data[0]?.id}
      value={selectedCurrency}
      onChange={onChangeCurrency}
    />
  );
};

export default CurrencySelect;
