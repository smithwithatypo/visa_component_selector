import { VisaErrorTiny } from '@visa/nova-icons-react';
import { ChangeEvent, useState } from 'react';
import { Button, Input, InputContainer, Label, Utility } from '@visa/nova-react';
import './Search.css'


const id = 'search';


export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  
  function handleSubmit(searchInput) {
    // TODO: make call to backend here
    return { searchInput };
  }

  function handleReset() {
    setSearchInput("");
  }


  return (
    <>
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Search components</Label>
      <InputContainer>
        <Input aria-required="true" id={id} type="text" onChange={(e) => setSearchInput(e.target.value)}/>
      </InputContainer>
      <p> {searchInput} </p>
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