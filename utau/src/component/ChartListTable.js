// 곡 정보 리스트
import {Table, TableBody, TableCell, Paper, TableRow, TableHead, TableContainer} from '@mui/material'
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

import {TabTheme} from '../data/ColorTheme'

function ChartListTable(props){
  let brandSlice = useSelector((state) => state.brand)

  let [tab, setTab] = useState("인기 차트");
  let [brand, setBrand] = useState("TJ");
  let karaoke = useQuery(["karaokeData"], () =>
    axios.get("https://api.manana.kr/v2/karaoke/release.json?release=202303&brand=tj&orderBy=title ASC&page=1")
      .then((result) => { return result.data.data; })
      .catch(() => { console.log("karaoke API get Error"); })
  );

  //tab 값 설정
  useEffect(()=>{
    props.tab == 0 ? setTab("인기 차트") : setTab("최신 곡")
  }, [props.tab])

  //브랜드 버튼 값 설정
  useEffect(()=>{
    brandSlice == 0 ? setBrand("TJ") : setBrand("KY")
  }, [brandSlice])
  
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <CreateTableHead/>
        </TableHead>
        <TableBody>
          <CreateRow karaoke = {karaoke} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}



// 리스트 제목
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

// 리스트 내용
function CreateRow(props){
    //테이블 생성
    let data = props.karaoke.data
    let rows = []

    if (data != undefined){
        data.map(function(a,i){
          rows.push(createData(data[i].no, data[i].title, data[i].singer))
        })
    }

  return(
    <>
    {rows.map((row) => (
      <TableRow
        key={row.num}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="center">
          {row.num}
        </TableCell>
        <TableCell align="left">{row.title}</TableCell>
        <TableCell align="left">{row.artist}</TableCell>
      </TableRow>
    ))}
    </>
  )
}

function createData(num, title, artist) {
  return { num, title, artist };
}

export default ChartListTable;