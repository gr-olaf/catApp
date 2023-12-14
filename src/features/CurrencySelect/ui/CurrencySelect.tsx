import { Currency } from '@/entities/Currency';
import { useGetCurrency } from '../api/currencySelectApi';

const CurrencySelect = () => {
  const { data, isLoading, isError } = useGetCurrency();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return <Currency items={data} />;
};

export default CurrencySelect;
