import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";


function Admin () {
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback);

   useEffect(() => {
    getFeedback();
  }, []);
 
  //add a button to call new orders?

const getFeedback = () => {
    axios({
        method: 'GET',
        url: '/feedback'
    })
    .then((response) => {
        console.log(response);
        const action = {
            type: 'GET_FEEDBACK',
            payload: response.data
        }
        dispatch(action);
    })
    .catch((error) => {
        console.log('Error in get route for admin page', error);
    })
}

//styling for table

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

    
    return(
        <>
        <Box className="button">
            {/* <Button onClick={getOrders}>Get New Orders!</Button> */}
            
        </Box>
                    <Box className="table">
                        <TableContainer component={Paper} className="adminTable">
                            <Table sx={{maxWidth: 1000}} aria-label="admin table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Feeling</StyledTableCell>
                                        <StyledTableCell align="left">Comprehension</StyledTableCell>
                                        <StyledTableCell align="left">Support</StyledTableCell>
                                        <StyledTableCell align="left">Comments</StyledTableCell>
                                        <StyledTableCell align="left">Delete</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {feedback.map(oneFeedback => {
                                        return(
                                            <StyledTableRow key={oneFeedback.id}>
                                                <StyledTableCell>{oneFeedback.feeling}</StyledTableCell>
                                                <StyledTableCell>{oneFeedback.understanding}</StyledTableCell>
                                                <StyledTableCell>{oneFeedback.support}</StyledTableCell>
                                                <StyledTableCell>{oneFeedback.comments}</StyledTableCell>
                                                <StyledTableCell><button>Delete</button></StyledTableCell>
                                            </StyledTableRow>
                                        );
                                    })}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>  
        </>
    )
}

export default Admin;