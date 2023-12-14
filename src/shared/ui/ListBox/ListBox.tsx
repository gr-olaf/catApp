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
  defaultValue?: string;
  value?: ListBoxItem;
  onChange: (value: ListBoxItem) => void;
}

const ListBox = ({
  className,
  items,
  defaultValue,
  value,
  onChange,
}: ListBoxProps) => {
  return (
    <div className={clsx(cls.listbox__container, className)}>
      <Listbox
        value={value}
        onChange={onChange}
        as="div"
        className={cls.listbox}
      >
        <Listbox.Button as="div">
          <Button addonRight={<ChevronIcon />}>
            {value.id ? value.id : defaultValue}
          </Button>
        </Listbox.Button>
        <Listbox.Options className={cls.options}>
          {items?.map((item) => (
            <Listbox.Option key={item.id} value={item} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={clsx(
                    selected && cls.selected,
                    active && cls.active
                  )}
                >
                  {item.id}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ListBox;
