import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[500],
    Height:"30px",
    fontSize:"13px",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "12px",
   
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
 
  '&:last-child td, &:last-child th': {
    border: 0,
    
  },
  
}));



export default function CustomizedTables({rows}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NAME OF THE HOLDING</StyledTableCell>
            <StyledTableCell align="left">TICKER</StyledTableCell>
            <StyledTableCell align="left">AVERAGE PRICE</StyledTableCell>
            <StyledTableCell align="left">MARKET PRICE</StyledTableCell>
            <StyledTableCell align="left">LATEST CHANGE PERCENTAGE</StyledTableCell>
            <StyledTableCell align="left">MARKET VALUE IN BASE CCY</StyledTableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.ticker}</StyledTableCell>
              <StyledTableCell align="left">{row.avg_price}</StyledTableCell>
              <StyledTableCell align="left">{row.market_price}</StyledTableCell>
              <StyledTableCell align="left">{row.latest_chg_pct}</StyledTableCell>
              <StyledTableCell align="left">{row.market_value_ccy}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}