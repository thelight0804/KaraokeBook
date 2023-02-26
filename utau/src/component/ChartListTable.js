import {TabTheme} from '../resource/ColorTheme'
import {Table, TableBody, TableCell, Paper, TableRow, TableHead, TableContainer} from '@mui/material'

function ChartListTable(props){
  const tabTheme = TabTheme.palette;

  const rows = [
    createData("번호1 - "+props.tab, "곡1 - "+props.tab, "아티스트1 - "+props.tab),
    createData("번호2 - "+props.tab, "곡2 - "+props.tab, "아티스트2 - "+props.tab),
    createData("번호3 - "+props.tab, "곡3 - "+props.tab, "아티스트3 - "+props.tab),
    createData("번호4 - "+props.tab, "곡4 - "+props.tab, "아티스트4 - "+props.tab),
    createData("번호5 - "+props.tab, "곡5 - "+props.tab, "아티스트5 - "+props.tab),
  ];
  
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{
              backgroundColor: tabTheme.primary.main,
              borderBottomColor: tabTheme.secondary.main
              }} align='center'>번호</TableCell>
            <TableCell sx={{
              backgroundColor: tabTheme.primary.main,
              borderBottomColor: tabTheme.secondary.main
              }} align="left">곡</TableCell>
            <TableCell sx={{
              backgroundColor: tabTheme.primary.main,
              borderBottomColor: tabTheme.secondary.main
              }} align="left">아티스트</TableCell>
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