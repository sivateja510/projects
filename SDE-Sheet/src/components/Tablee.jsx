import React from "react";
import Navbar from "./Navbar";
import './tablee.css';
import { useState } from "react";
import { useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'sno', label: 'Sno', minWidth: 10 },
    { id: 'ques', label: 'Question', minWidth: 250 },
    {
        id: 'level',
        label: 'Level',
        minWidth: 150,
        align: 'center',
    },
    {
        id: 'tpoic',
        label: 'Topic',
        minWidth: 100,
        align: 'center',
    },
    {
        id: 'gfg',
        label: 'GeeksFor Geeks',
        minWidth: 150,
        align: 'center',

    },
    {
        id: 'letcode',
        label: 'Leetcode',
        minWidth: 150,
        align: 'center',
    },
    {
        id: 'youtube',
        label: 'Solution',
        minWidth: 150,
        align: 'center',
    },


];

function createData(sno, ques, level, topic, gfg, letcode, youtube) {
    return { sno, ques, level, topic, gfg, letcode, youtube };
}


function Tablee(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [questions, setTopics1] = useState([]);
    const getTopics1 = async () => {
        try {
            const response = await fetch('http://localhost:8090/Practice', {
                method: 'GET'
            });

            const result = await response.json();
            setTopics1(result);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getTopics1();
    }, []);
    const rows = [];
    var k;
    const filteredQuestions = props.top;
    var one = 1;

    return (
        <>
            <div className="maintab">
                <div className="tabl">
                    <Paper sx={{ width: '100%' }}>
                        <TableContainer sx={{ maxHeight: 580 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ top: 0, minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredQuestions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell id="level" align="center">{index + 1}</TableCell>
                                            <TableCell id="level" align="left">{item.ques}</TableCell>
                                            <TableCell id="level" align="center">{item.sub}</TableCell>
                                            <TableCell id="level" align="center">{item.level}</TableCell>
                                            <TableCell id="level" align="center"><a href={item.Gfg} target="_blank">Link</a></TableCell>
                                            <TableCell id="level" align="center"><a href={item.Leetcode} target="_blank">Link</a></TableCell>
                                            <TableCell id="level" align="center"><a href={item.Youtube} target="_blank">Link</a></TableCell>
                                        </TableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={filteredQuestions.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>
        </>
    )
}
export default Tablee;
