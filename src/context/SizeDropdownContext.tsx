import React, { createContext, useContext, useState, useEffect } from 'react';
import { SizesDataType } from 'types';

// Define the shape of the context
interface SizeDropdownContextProps {
  isOpen: boolean;
  selectedSize: SizesDataType | undefined;
  setSelected: (selected: SizesDataType) => void;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

// Create the context with a default value
const SizeDropdownContext = createContext<SizeDropdownContextProps | undefined>(undefined);

export const SizeDropdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedSize, setSelectedSize] = useState<SizesDataType | undefined>(undefined);

    const setSelected = (selected: SizesDataType) => setSelectedSize(selected);
  
    const toggleDropdown = () => {
        console.log("here");
        setIsOpen((prev) =>!prev);
    };
  
    const closeDropdown = () => {
        if (isOpen) setIsOpen(false);
    };
    
  
    // Close the dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        // Here you can add logic to determine if the click was outside the dropdown
        // For example, checking the event target against a ref
    
        closeDropdown();
      };
  
    //   if (isOpen) {
    //     document.addEventListener('click', handleClickOutside);
    //   } else {
    //     document.removeEventListener('click', handleClickOutside);
    //   }
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isOpen, closeDropdown]);
  
    return (
      <SizeDropdownContext.Provider value={{ isOpen, toggleDropdown, closeDropdown, selectedSize, setSelected }}>
        {children}
      </SizeDropdownContext.Provider>
    );
  };
  

// Custom hook to use the SizeDropdownContext
export const useSizeDropdownContext = (): SizeDropdownContextProps => {
  const context = useContext(SizeDropdownContext);
  if (!context) {
    throw new Error('useDropdownContext must be used within a SizeDropdownProvider');
  }
  return context;
};
