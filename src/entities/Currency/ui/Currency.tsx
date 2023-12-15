import { ListBox } from '@/shared/ui/ListBox';
import { CurrencySchema } from '../model/types/currency';

interface CurrencyProps {
  className?: string;
  items: CurrencySchema[];
  defaultValue?: string;
  value: CurrencySchema;
  onChange: (value: CurrencySchema) => void;
}

const Currency = ({
  items,
  defaultValue,
  value,
  onChange,
  className,
}: CurrencyProps) => {
  return (
    <ListBox
      className={className}
      items={items}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
};

export default Currency;
