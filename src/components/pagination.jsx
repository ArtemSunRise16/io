import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "./context";

export const Pagination = ({ todosPrePage, totalTodo, todoPagination }) => {
  const { nextPage, pastPage, currentPage } = useContext(Context);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalTodo / todosPrePage); i++) {
    pageNumber.push(i);
  }

  return (
    <Box display="flex" justifyContent="center">
      {currentPage >= 2 && (
        <Button color="#EA5959" fontSize="20px" onClick={pastPage}>
          {"<<"}
        </Button>
      )}
      {currentPage >= 3 && (
        <Button color="#EA5959" fontSize="20px" onClick={pastPage}>
          {"..."}
        </Button>
      )}
      {pageNumber.length > 1 &&
        pageNumber.map((page) => {
          if (
            page === currentPage ||
            page === currentPage + 1 ||
            page === currentPage - 1
          ) {
            return (
              <Button
                _hover={{ bg: "white", color: "#EA5959" }}
                fontSize="20px"
                bg={currentPage === page && "#EA5959"}
                color={currentPage === page && "#ffffff"}
                onClick={() => todoPagination(page)}
                key={page}
              >
                {page}
              </Button>
            );
          }
        })}
      {currentPage < Math.ceil(totalTodo / todosPrePage) - 1 && (
        <Button fontSize="20px" color="#EA5959" onClick={nextPage}>
          {"..."}
        </Button>
      )}
      {currentPage < pageNumber.length && (
        <Button fontSize="20px" color="#EA5959" onClick={nextPage}>
          {">>"}
        </Button>
      )}
    </Box>
  );
};
