import { Listbox, Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { Fragment } from 'react';
import { FaArrowPointer} from 'react-icons/fa6';

const BrandList = () => {
    const people = [
        { name: 'Walton' },
        { name: 'Symphony' },
        { name: 'Oppo' },
        { name: 'Xiaomi' },
        { name: 'Itel' },
        { name: 'Firm' },
      ]
      const [selected, setSelected] = useState(people[0])
    return (
        <div className="w-48 border">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default text-left px-2 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <FaArrowPointer />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none px-2 py-1 ${active ? 'bg-blue-400 text-white' : 'text-gray-900'
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default BrandList;