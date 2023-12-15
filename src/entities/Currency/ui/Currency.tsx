import { ListBox } from '@/shared/ui/ListBox';
import { CurrencySchema } from '../model/types/currency';

interface CurrencyProps {
  className?: string;
  items: CurrencySchema[];
  defaultValue?: string;
  value: CurrencySchema;
  onChange: (value: CurrencySchema) => void;
}

const Currency = (props: CurrencyProps) => {
  return <ListBox {...props} />;
};

export default Currency;
