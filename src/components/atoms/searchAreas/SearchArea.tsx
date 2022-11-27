import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, useState } from 'react';
import React, { useEffect } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';

const SearchAreaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 12px 0;
  width: 100%;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 4px;
  &:focus {
    border: rgb(82, 79, 161);
  }
`;
const SearchIcon = styled.div`
  margin: 0 16px;
`;
const TextBox = styled.input`
  height: 22px;
  width: 100%;
  border: none;
  padding: 0;
  &:focus {
    outline: none;
  }
`;

const SearchArea = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string | null>('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setInputValue(searchParams.get('keyword'));
  }, []);

  const debouncedSearch = useDebounce((inputValue) => {
    if (inputValue === '') searchParams.delete('keyword');
    else searchParams.set('keyword', inputValue);
    setSearchParams(searchParams);
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  // 페이지 전환 시 검색어 동기화
  useEffect(() => {
    setInputValue(searchParams.get('keyword') || '');
  }, [searchParams]);

  return (
    <SearchAreaDiv className="searchArea">
      <SearchIcon style={{ margin: '0 16px' }}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ height: '16px', width: '16px' }}
        />
      </SearchIcon>
      <TextBox
        value={inputValue ? inputValue : ''}
        onChange={handleChange}
        className="textBox"
        type="text"
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
      />
    </SearchAreaDiv>
  );
};

export default SearchArea;
