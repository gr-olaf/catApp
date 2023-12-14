import { ListBox } from '@/shared/ui/ListBox';
import { CurrencySchema } from '../model/currency';

interface CurrencyProps {
  items: CurrencySchema[];
}

const Currency = ({ items }: CurrencyProps) => {
  return <ListBox items={items} />;
};

export default Currency;
