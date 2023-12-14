import { Fragment, useState } from 'react';
import { Listbox } from '@headlessui/react';

import ChevronIcon from '../../assets/chevron-down.svg';
import { Button } from '../Button';
import cls from './ListBox.module.scss';
import clsx from 'clsx';

const people = [
  { id: 1, name: 'RUB' },
  { id: 2, name: 'AED' },
  { id: 3, name: 'ALL' },
  { id: 4, name: 'AMD' },
];

interface ListBoxProps {
  className?: string;
}

const ListBox = ({ className }: ListBoxProps) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <Listbox
      value={selectedPerson}
      onChange={setSelectedPerson}
      as="div"
      className={clsx(cls.listbox, className)}
    >
      <Listbox.Button as="div">
        <Button addonRight={<ChevronIcon />}>{selectedPerson.name}</Button>
      </Listbox.Button>
      <Listbox.Options className={cls.options}>
        {people.map((person) => (
          <Listbox.Option key={person.id} value={person} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                {person.name}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default ListBox;
