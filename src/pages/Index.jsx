// Complete the Index page component here
// Use chakra-ui
import React from "react";
import { Box, Flex, Grid, GridItem, useToast, Button } from "@chakra-ui/react";
import { FaChessKing, FaChessQueen, FaChessRook, FaChessBishop, FaChessKnight, FaChessPawn } from "react-icons/fa";

const boardInitial = [
  [FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing, FaChessBishop, FaChessKnight, FaChessRook],
  [FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn],
  [FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing, FaChessBishop, FaChessKnight, FaChessRook],
];

const Index = () => {
  const toast = useToast();
  const [board, setBoard] = React.useState(boardInitial);

  const handleCellClick = (piece, row, col) => {
    if (piece) {
      toast({
        title: "Piece selected.",
        description: `You selected a piece at row ${row + 1}, column ${col + 1}.`,
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Grid templateColumns="repeat(8, 1fr)" gap={1} p={4} bg="gray.800">
        {board.map((row, rowIndex) =>
          row.map((CellComponent, colIndex) => (
            <GridItem w="40px" h="40px" bg={(rowIndex + colIndex) % 2 === 0 ? "gray.600" : "gray.500"} display="flex" alignItems="center" justifyContent="center" onClick={() => handleCellClick(CellComponent, rowIndex, colIndex)} key={`${rowIndex}-${colIndex}`}>
              {CellComponent ? <CellComponent size="24px" color="white" /> : null}
            </GridItem>
          )),
        )}
      </Grid>
      <Button mt={4} onClick={() => setBoard(boardInitial)}>
        Reset Board
      </Button>
    </Flex>
  );
};

export default Index;
