import { useState } from 'react';
import { Button, Input, InputContainer, Label, Utility } from '@visa/nova-react';
import './Search.css'

const id = 'search';

export const Search = ({ onSendToParent }) => {
  const [searchInput, setSearchInput] = useState("");
  
  function handleSubmit() {    
    if (onSendToParent) {
      onSendToParent({ searchInput });
    }
  }

  function handleReset() {
    setSearchInput("");
  }

  return (
    <>
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Search for components</Label>
      <InputContainer>
        <Input aria-required="true" id={id} type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
      </InputContainer>
    </Utility>
    <Utility vFlex vGap={12} vMarginTop={16}>
        <Button id={`${id}-submit-button`} onClick={handleSubmit}>
          Submit
        </Button>
        <Button id={`${id}-reset-button`} colorScheme="secondary" onClick={handleReset}>
          Reset
        </Button>
    </Utility>
    </>
  );
};