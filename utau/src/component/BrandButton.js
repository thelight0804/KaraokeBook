// 노래방 브랜드 선택 버튼 (탭)

import {createTheme, ThemeProvider, Tabs, Tab} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {setBrand} from '../data/brandSlice'

function BrandButton(){
  const theme = createTheme({
    palette: {
      tj: { main: "#FF4A00" },
      ky: { main: "#8270DB" }
    },
  });
  let brand = useSelector((state)=> state.brand) //노래방 브랜드 번호
  let dispatch = useDispatch();

  //Tab 선택에 따른 이벤트
  const handleChange = (event, newBrand) => {
    dispatch(setBrand(newBrand));
  };

  return (
    <ThemeProvider theme={theme}>
        <Tabs
          value={brand}
          onChange={handleChange} //탭 선택 시
          variant='fullWidth' //최대 폭 조정
          indicatorColor='none'
          selectionFollowsFocus={true}
          style={{margin: 10 + 'px'}}
        >
          <Tab 
            value={"tj"}
            sx={{
              color: theme.palette.tj.main, //글자 색
              fontWeight: "bold", //글자 굵게
              border: "solid", //외곽선
              borderWidth: "1px 0px 1px 1px",
              borderRadius: "10px 0px 0px 10px",
              '&.Mui-selected': {
                backgroundColor: theme.palette.tj.main,
                color: 'white'
              },
            }}
            label="TJ미디어"
            disableRipple />
          <Tab 
            value={"kumyoung"} 
            sx={{
              color: theme.palette.ky.main,
              fontWeight: "bold",
              border: "solid",
              borderWidth: "1px 1px 1px 0px",
              borderRadius: "0px 10px 10px 0px",
              '&.Mui-selected': {
                backgroundColor: theme.palette.ky.main,
                color: 'white'
              },
            }}
            disableRipple
            label="금영노래방" />
        </Tabs>
    </ThemeProvider>
  );
}

export default BrandButton;