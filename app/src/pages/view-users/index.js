import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import rowsTemp from './userInfo';
import { Box } from '@mui/system';
import { Checkbox, FormControlLabel, Switch, TextField } from '@mui/material';
import styles from './style.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

Array.prototype.applyFilter = function (options) {
  return this.filter((item) => {
    if (options.showApproved && options.showPending) return item;
    else if (options.showApproved) return item.isEligible;
    else if (options.showPending) return !item.isEligible;
    else return;
  });
};

export default function CustomizedTables() {
  // Assign rows to new variable to update isEligible field
  const rows = rowsTemp;
  const [rowsToShow, setRowsToShow] = React.useState(rows);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showPending, setShowPending] = React.useState(true);
  const [showApproved, setShowApproved] = React.useState(true);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    // Update rows whenever the options are updated
    setRowsToShow(rows.applyFilter({ showApproved, showPending }));
  }, [showApproved, showPending]);

  const toggleEligibility = (citizenShipCertificateNumber) => {
    // Find the data to update(find by citizenship certificate number)
    const rowToToggleEligibility = rows.find(
      (item) =>
        item.citizenShipCertificateNumber.toString() ===
        citizenShipCertificateNumber.toString()
    );
    setChecked(rowToToggleEligibility.isEligible);
    // Toggle eligibility
    rowToToggleEligibility.isEligible = !rowToToggleEligibility.isEligible;
    setChecked(!checked);
  };

  return (
    <>
      <Box className="top-box">
        <Box className="check-box-parent">
          <h3>Show</h3>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Approved"
            value={showApproved}
            onChange={() => {
              setShowApproved(!showApproved);
            }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Pending Approval"
            value={showPending}
            onChange={() => {
              setShowPending(!showPending);
            }}
          />
        </Box>
        <TextField
          className="standard-basic"
          label="Search By CitizenShip Certificate Number"
          variant="filled"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Middle Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Citizenship Certificate Number</StyledTableCell>
              <StyledTableCell>
                Citizenship Certificate Issued District
              </StyledTableCell>
              <StyledTableCell>Approved</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsToShow
              .filter((item) => {
                if (searchQuery === '') {
                  return item;
                } else if (
                  item.citizenShipCertificateNumber
                    .toString()
                    .includes(searchQuery.toString())
                ) {
                  return item;
                } else {
                  return 0;
                }
              })
              .map((row) => (
                <StyledTableRow key={row.citizenShipCertificateNumber}>
                  <StyledTableCell component="th" scope="row">
                    {row.firstName}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.middleName}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.lastName}
                  </StyledTableCell>

                  <StyledTableCell>{row.address}</StyledTableCell>
                  <StyledTableCell>
                    {row.citizenShipCertificateNumber}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.citizenShipCertificateIssuedDistrict}
                  </StyledTableCell>
                  <StyledTableCell>
                    {
                      <Switch
                        checked={row.isEligible}
                        onClick={() =>
                          toggleEligibility(row.citizenShipCertificateNumber)
                        }
                      />
                    }
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
