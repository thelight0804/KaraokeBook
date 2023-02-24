import {React, useState} from 'react';
import './App.css';
import {TextField, createTheme, ThemeProvider, Tabs, Tab} from '@mui/material';
import { teal } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';


//theme color
const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      // #009688
    },
    secondary: {
      main: teal[600],
      // #00897b
    },
    info:{
      main: teal[700]
      // #00796b
    },
  },
});

function App() {
  const [Tabvalue, setTabvalue] = useState(0);

  const handleChange = (event, newTabvalue) => {
    setTabvalue(newTabvalue);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h1>Utau</h1>

        {/* input search */}
        <TextField
          fullWidth
          id="standard-basic"
          label="제목, 가수, 작품, 가사로 검색"
          variant="standard"
          InputProps={{
            endAdornment: <SearchIcon fontSize="large" color="primary" />,
          }}
        />

        {/* tab */}
        <Tabs
          value={Tabvalue}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant='fullWidth'
          style={{margin: 10 + 'px'}}
          // aria-label="secondary tabs example"
        >
          <Tab value={0} label="인기 차트" />
          <Tab value={1} label="최신 곡" />
        </Tabs>
      </ThemeProvider>
    </div>
  );
}

export default App;
