// 곡 정보 리스트
import {Table, TableBody, TableCell, Paper, TableRow, TableHead, TableContainer} from '@mui/material'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'

import {TabTheme} from '../data/ColorTheme'

function ChartListTable(props){
  let [tab, setTab] = useState("인기 차트");

  let release = 202302;
  let brand = useSelector((state)=>state.brand);
  let [page, setPage] = useState(1);

  let [data, setData] = useState(null); //karaoke data
  let [rows, setRows] = useState([]); //list rows

  //tab 값 설정
  useEffect(()=>{
    props.tab == 0 ? setTab("인기 차트") : setTab("최신 곡")
  }, [props.tab])

  //get karaoke data
  useEffect(() => {
    axios.get(`https://api.manana.kr/v2/karaoke/release.json?release=${release}&brand=${brand}&orderBy=title ASC&page=${page}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch(() => {
        console.log("getReleaseKaraoke Error");
      });
  }, [brand]);

  //set rows
  useEffect(()=>{
    if (data != null) {
      let copy = [];
      data.map(function (a, i) {
        copy.push({
          no: data[i].no,
          title: data[i].title,
          singer: data[i].singer,
        });
      });
      setRows(copy);
    }
  })
  
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <CreateTableHead/>
        </TableHead>
        <TableBody>
          <CreateRow rows={rows}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}



// 리스트 제목 생성
function CreateTableHead(){
  let cell = ["번호", "곡", "아티스트"];
  const tabTheme = TabTheme.palette;
  return (
    <TableRow>
      {cell.map(function (a, i) {
        return (
          <TableCell
            sx={{
              backgroundColor: tabTheme.primary.main,
              borderBottomColor: tabTheme.secondary.main,
              fontWeight: "bold",
            }}
            align="center"
            key={i}
          >
            {cell[i]}
          </TableCell>
        );
      })}
    </TableRow>
  );
}

// 리스트 생성
function CreateRow(props){
  return (
    <>
      {props.rows.map((row) => (
        <TableRow
          key={row.no}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row" align="center">
            {row.no}
          </TableCell>
          <TableCell align="left">{row.title}</TableCell>
          <TableCell align="left">{row.singer}</TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default ChartListTable;