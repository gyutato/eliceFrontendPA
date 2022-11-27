import styled from '@emotion/styled';
import Chip from '../Buttons/Chip';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FilterContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid rgb(225, 226, 228);
`;
const FilterCategory = styled.div`
  display: flex;
  align-items: center;
  height: 18px;
  width: 63px;
  padding: 14px 16px;
  background-color: rgb(249, 250, 252);
  border-right: 1px solid rgb(225, 226, 228);
`;
const CategoryName = styled.p`
  font-size: 12px;
`;

type ChipsFilterProps = {
  category: string;
  filterOption: string[];
};

const ChipsFilter = (props: ChipsFilterProps): JSX.Element => {
  const { category, filterOption } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentParams, setCurrentParams] = useState(
    new Set(searchParams.getAll(category)),
  );

  useEffect(() => {
    setCurrentParams(new Set(searchParams.getAll(category)));
  }, [searchParams]);

  // 옵션 클릭 handle 함수
  const onChipClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.tagName !== 'BUTTON') {
      return;
    }
    const priceType = target.name;
    if (currentParams.has(priceType)) {
      searchParams.delete(category);
      let tmp = [...currentParams].filter((param) => param !== priceType);
      tmp.forEach((param) => {
        searchParams.append(category, param);
      });
    } else {
      searchParams.append(category, priceType);
    }
    setSearchParams(searchParams);
  };

  // 칩 렌더링 함수
  const renderChips = (): JSX.Element[] => {
    const Chips = filterOption.map((item, idx) => {
      return <Chip name={item} isClicked={currentParams.has(item)} key={idx} />;
    });
    return Chips;
  };

  return (
    <FilterContainer className="filter" onClick={onChipClick}>
      <FilterCategory className="filterCategory">
        <CategoryName className="categoryName">가격</CategoryName>
      </FilterCategory>
      <div style={{ padding: '0 8px', display: 'flex' }}>{renderChips()}</div>
    </FilterContainer>
  );
};
export default ChipsFilter;
