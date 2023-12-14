import { Fragment, useState } from 'react';
import clsx from 'clsx';
import { Listbox } from '@headlessui/react';

import ChevronIcon from '../../assets/chevron-down.svg';
import { Button } from '../Button';
import cls from './ListBox.module.scss';

interface ListBoxItem {
  id: string;
  name: string;
}

interface ListBoxProps {
  className?: string;
  items: ListBoxItem[];
  // value?: ListBoxItem;
  // onChange: (value: ListBoxItem) => void;
}

const ListBox = ({ className, items }: ListBoxProps) => {
  const [selectedItem, setSelectedItem] = useState(items?.[0]);

  return (
    <Listbox
      value={selectedItem}
      onChange={setSelectedItem}
      as="div"
      className={clsx(cls.listbox, className)}
    >
      <Listbox.Button as="div">
        <Button addonRight={<ChevronIcon />}>{selectedItem?.name}</Button>
      </Listbox.Button>
      <Listbox.Options className={cls.options}>
        {items?.map((item) => (
          <Listbox.Option key={item.id} value={item} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(selected && cls.selected, active && cls.active)}
              >
                {item.name}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default ListBox;
