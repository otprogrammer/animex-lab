import React, { useState,useEffect,createContext } from "react";
import { IoChevronDownCircleOutline, IoChevronUpCircleOutline } from "react-icons/io5";
import OutsideClickHandler from "./OutsideClickHandler";


const CustomDropdown = ({title, options, onSelect,selectedOptions,setSelectedOptions,refresh ,selectedSrt}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const SelectedStatusContext:any= createContext([]);
  const selectedStatusContext :any= [selectedOptions, setSelectedOptions];
  const setSelectedStatusContext :any= selectedStatusContext[1];

  useEffect(() => {
    setSelectedStatusContext(selectedOptions);
  }, [selectedOptions, setSelectedStatusContext]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleSort = (op:any) => {
    const updatedOptions = selectedOptions.includes(op)

    setSelectedOptions(op)

    refresh()

  }
 

  const handleOptionClick = (option:any) => {
  
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption:any) => selectedOption !== option)
      : [...selectedOptions, option];
  
  
    setSelectedOptions(updatedOptions);
    onSelect(updatedOptions);
    refresh()
    setIsOpen(false);
  };

  return (
              <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
    <SelectedStatusContext.Provider value={selectedStatusContext}>

    <div className="relative inline-block">
                
    <button
  className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-200 bg-neutral-800 p-2 focus:outline-none"
  
  onClick={toggleDropdown}
>
  <span
  style={{ maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
    {title === 'Sort' ? selectedOptions : selectedOptions.length > 0
      ? selectedOptions.map((option:any) => option).join(", ")
      : `${title}`}
  </span>
    {isOpen ? (
      <IoChevronUpCircleOutline className="w-5 h-5 ml-2 -mr-1 text-gray-300" />
    ) : (
      <IoChevronDownCircleOutline className="w-5 h-5 ml-2 -mr-1 text-gray-300" />
    )}
</button>
      {isOpen && (
        <ul className={`absolute z-10 w-[220px] py-1 mt-2 bg-neutral-900/90 grid ${title === 'Year' && "grid-cols-3"}  rounded-md shadow-md`}>
          {options.map((option:any) => (
            <li
              key={option}
              className={`px-4 py-2 my-0.5 text-sm  hover:bg-neutral-800 ${title !== 'sort' && selectedOptions?.includes(option) ? 'text-blue-700' : "text-gray-300"} cursor-pointer`}
              onClick={() => {if (title === 'Sort') { handleSort(option) } else { handleOptionClick(option)}}}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
    </SelectedStatusContext.Provider>
    </OutsideClickHandler>


  );
};

export default CustomDropdown;
