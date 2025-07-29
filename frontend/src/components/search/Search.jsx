import { useContext } from 'react';
import { Button, Input, InputContainer, Label, Utility } from '@visa/nova-react';
import { DataContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './Search.css'

const id = 'search';

export const Search = ({ fromLanding, onSearchSubmit }) => {
  const { searchInput, setSearchInput } = useContext(DataContext);
  const navigate = useNavigate();

  
  function handleSubmit() {    
    if (fromLanding) {
      navigate('/searching');
    }
    if (onSearchSubmit) {
      onSearchSubmit();
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSubmit();
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
        <Input aria-required="true" id={id} type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyDown={handleKeyDown}/>
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