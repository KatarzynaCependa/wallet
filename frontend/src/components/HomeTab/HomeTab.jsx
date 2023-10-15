import {
  TableWrapper,
  TableHead,
  TableHeader,
  Table,
  TableBody,
  List,
  ListItem,
  ListItemValue,
  TableCell,
  TableHeaderCell,
  DeleteButton,
  Button,
  StyledTable,
  EditText,
  TableNextRows,
  TableBodyContainer,
} from "./HomeTab.styled";
import {
  fetchTransactions,
  deleteTransaction,
  fetchTotals,
} from "../../redux/finance/operations";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTransactions } from "../../redux/finance/selectors";
import {
  amountFormatter,
  typeFormatter,
  amountColorFormatter,
  formatDate,
} from "../../utils/formatUtils";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import Media from "react-media";
import Notiflix from "notiflix";

export const HomeTab = () => {
  const transactions = useSelector(selectTransactions);
  const fetchedTransactions = transactions.slice().reverse();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  const TransactionsDeleteHandler = async (id) => {
    await dispatch(deleteTransaction(id));
    await dispatch(fetchTransactions());
    await dispatch(fetchTotals());
    Notiflix.Notify.info("Transaction removed from your list");
  };

  const transformedTableTransactions = fetchedTransactions.map(
    (item, index) => {
      const deleteBtn = (
        <DeleteButton
          type="submit"
          onClick={() => TransactionsDeleteHandler(item._id)}
        >
          Delete
        </DeleteButton>
      );

      const editBtn = (
        <Button type="button">
          <EditIcon></EditIcon>
          <EditText>Edit</EditText>
        </Button>
      );

      return [
        { header: "Date", value: formatDate(item.date) },
        { header: "Type", value: item.type },
        { header: "Category", value: item.category },
        { header: "Comment", value: item.comment },
        { header: "Sum", value: amountFormatter(item.amount.toString()) },
        { header: deleteBtn, value: editBtn },
      ];
    }
  );

  return (
    <>
      <Media
        queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <>
            {matches.medium && (
              <TableWrapper>
                <TableBodyContainer>
                  <Table>
                    <TableHead>
                      <TableHeaderCell>Date</TableHeaderCell>
                      <TableHeaderCell>Type</TableHeaderCell>
                      <TableHeaderCell>Category</TableHeaderCell>
                      <TableHeaderCell>Comment</TableHeaderCell>
                      <TableHeaderCell>Sum</TableHeaderCell>
                      <TableHeaderCell></TableHeaderCell>
                      <TableHeaderCell></TableHeaderCell>
                    </TableHead>
                    <TableBody>
                      {fetchedTransactions.map((option, index) => (
                        <TableNextRows key={index}>
                          <TableCell></TableCell>
                          <TableCell>{formatDate(option.date)}</TableCell>
                          <TableCell>{typeFormatter(option.type)}</TableCell>
                          <TableCell>{option.category}</TableCell>
                          <TableCell>{option.comment}</TableCell>
                          <TableCell
                            style={{
                              color: amountColorFormatter(option.type),
                            }}
                          >
                            {amountFormatter(option.amount)}
                          </TableCell>
                          <TableCell>
                            {/* <Button type="button" onClick={openModal}> */}
                            <Button type="button">
                              <EditIcon></EditIcon>
                            </Button>
                          </TableCell>
                          <TableCell>
                            <DeleteButton
                              type="submit"
                              onClick={() =>
                                TransactionsDeleteHandler(option._id)
                              }
                            >
                              Delete
                            </DeleteButton>
                          </TableCell>
                        </TableNextRows>
                      ))}
                    </TableBody>
                  </Table>
                </TableBodyContainer>
              </TableWrapper>
            )}
            {matches.small && (
              <StyledTable>
                {transformedTableTransactions.map((item, rowIndex) => {
                  const type = item[1].value;

                  return (
                    <List key={rowIndex}>
                      {item.map((option, columnIndex) => (
                        <ListItem
                          key={columnIndex}
                          style={{
                            borderLeftColor: amountColorFormatter(type),
                          }}
                        >
                          <TableHeader>{option.header}</TableHeader>
                          <ListItemValue>{option.value}</ListItemValue>
                        </ListItem>
                      ))}
                    </List>
                  );
                })}
              </StyledTable>
            )}
          </>
        )}
      </Media>
    </>
  );
};
