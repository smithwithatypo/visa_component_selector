import { useContext } from 'react';
import { Button, Input, InputContainer, Label, Utility } from '@visa/nova-react';
import { VisaClearAltHigh, VisaSendHigh } from '@visa/nova-icons-react'
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
      <Label htmlFor={id}>Search for components </Label>
      <Utility vFlex>
        <InputContainer>
          <Input aria-required="true" id={id} type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyDown={handleKeyDown}/>
        <Button id={`${id}-reset-button`} colorScheme="tertiary" onClick={handleReset}>
          <VisaClearAltHigh style={{ '--v-icon-primary': '#FFFFFF7E'}}/>
        </Button>
        </InputContainer>
        <Button id={`search-submit-button`} colorScheme='tertiary' onClick={handleSubmit}>
          <VisaSendHigh style={{ '--v-icon-primary': 'var(--palette-default-active)' }}/>
        </Button>
      </Utility>
    </Utility>
    </>
  );
};