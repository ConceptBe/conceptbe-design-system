import { useState } from 'react';

import Dropdown from './components/Dropdown/Dropdown';

const regionOptions = [
  { text: '서울특별시', value: '서울특별시' },
  { text: '부산광역시', value: '부산광역시' },
  { text: '대구광역시', value: '대구광역시' },
  { text: '인천광역시', value: '인천광역시' },
  { text: '광주광역시', value: '광주광역시' },
  { text: '울산광역시', value: '울산광역시' },
  { text: '세종특별자치시', value: '세종특별자치시' },
  { text: '경기도', value: '경기도' },
  { text: '강원특별자치도', value: '강원특별자치도' },
  { text: '충청북도', value: '충청북도' },
  { text: '충청남도', value: '충청남도' },
  { text: '전라북도', value: '전라북도' },
  { text: '전라남도', value: '전라남도' },
  { text: '경상북도', value: '경상북도' },
  { text: '경상남도', value: '경상남도' },
  { text: '제주특별자치도', value: '제주특별자치도' },
];

const App = () => {
  const [region, setRegion] = useState<string>('');

  return (
    <Dropdown
      onClick={(value) => setRegion(value)}
      items={regionOptions}
      initialValue={'시/도/광역시'}
    />
  );
};

export default App;
