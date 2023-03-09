import {React, useState} from 'react';
import {Link} from 'react-router-dom'
import './App.css';

import {TextField, ThemeProvider, Tabs, Tab} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import ChartListTable from './component/ChartListTable'
import BrandButton from './component/BrandButton'
import {MainTheme} from './data/ColorTheme'

function App() {
  const [tab, setTab] = useState(1);

  const handleChange = (event, newtab) => {
    setTab(newtab);
  };

  const theme = MainTheme;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <h1>Utau</h1>*/}
        <Link to="/" className='title'>Utau</Link>
        

        {/* input search */}
        <TextField
          fullWidth
          id="standard-basic"
          label="제목, 가수, 작품, 가사로 검색"
          variant="standard"
          InputProps={{
            endAdornment: <SearchIcon
            fontSize="large"
            color="primary"
            style={{cursor: 'pointer'}}
            />,
          }}
        />

        {/* tab */}
        <Tabs
          value={tab}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant='fullWidth'
          style={{margin: 10 + 'px'}}
          >
          <Tab value={0} style={{fontWeight: "bold"}} label="인기 차트" />
          <Tab value={1} style={{fontWeight: "bold"}} label="최신 곡" />
        </Tabs>
        {/* BrandButton */}
        <BrandButton/>
        <ChartListTable tab={tab}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
