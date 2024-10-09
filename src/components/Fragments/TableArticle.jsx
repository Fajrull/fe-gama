import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { GetArticles } from "../../services/Article";

const columns = [
  { id: "no", label: "No", minWidth: 50 },
  { id: "image", label: "Image", minWidth: 100 },
  { id: "articles", label: "Title", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 170 },
];

export default function CustomTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const getArticles = async () => {
      const data = await GetArticles();
      // console.log(data);
      setArticles(data.data);
    };
    getArticles();
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="custom table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {articles.length > 0 ? (
              articles
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((article, index) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={article.id}
                  >
                    <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                    <TableCell>
                      <img
                        src={article.image}
                        alt={article.title}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </TableCell>
                    <TableCell>{article.title}</TableCell>
                    <TableCell>{article.description}</TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  Tidak ada data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={articles.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        }}
      />
    </Paper>
  );
}
