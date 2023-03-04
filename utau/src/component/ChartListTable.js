// 곡 정보 리스트
import {Table, TableBody, TableCell, Paper, TableRow, TableHead, TableContainer} from '@mui/material'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

import {TabTheme} from '../data/ColorTheme'

function ChartListTable(props){
  const tabTheme = TabTheme.palette;
  let brandSlice = useSelector((state) => state.brand)

  let [cell, setCell] = useState(["번호", "곡", "아티스트"]);
  let [tab, setTab] = useState(null);
  let [brand, setBrand] = useState(null);

  useEffect(()=>{
    //tab과 브랜드 버튼 값 설정
    props.tab == 0 ? setTab("인기 차트") : setTab("최신 곡")
    brandSlice == 0 ? setBrand("TJ") : setBrand("KY")
  })

  // get karaoke API
  let karaoke = useQuery(['query'], ()=>
    axios.get('https://api.manana.kr/v2/karaoke/release.json?release=202303&brand=tj&orderBy=title ASC&page=1')
    .then((result)=>{ console.log(result); })
    .catch(()=>{console.log('Error');})
  ) 
  
  const rows = [
    createData(tab + brand, tab + brand, tab + brand),
  ];
  
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow key="{i}">
            {cell.map(function(a, i){
              return(
                <TableCell sx={{
                  backgroundColor: tabTheme.primary.main,
                  borderBottomColor: tabTheme.secondary.main,
                  fontWeight: "bold",
                  }} align='center'>{cell[i]}</TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function createData(num, title, artist) {
  return { num, title, artist };
}

export default ChartListTable;