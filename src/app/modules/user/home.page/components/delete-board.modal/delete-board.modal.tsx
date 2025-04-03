import { Button, Text } from "@/app/atomic";
import { deleteBoardStrings } from "./delete-board.strings";
import { useDeleteBoard } from "./delete-board.use-case";
import { toast } from "react-toastify";
import { deleteBoardDivVariants } from "./delete-board.style";

type DeleteBoardModalProps = {
  boardId: string;
  boardName: string;
  onBoardDeleted: () => void;
  onClose: () => void;
};

export function DeleteBoardModal({
  boardId,
  boardName,
  onBoardDeleted,
  onClose,
}: DeleteBoardModalProps) {
  const { deleteBoard, loading } = useDeleteBoard({
    onCompleted() {
      toast.success(deleteBoardStrings.successMessage);
      onBoardDeleted();
    },
    onError(error) {
      const errorMessage = error.message || deleteBoardStrings.errorMessage;
      toast.error(errorMessage);
    },
  });

  function handleDeleteBoard() {
    deleteBoard({ boardId });
  }

  return (
    <>
      <div className={deleteBoardDivVariants({ variant: "modalContainer" })}>
        <div className={deleteBoardDivVariants({ variant: "titlesContainer" })}>
          <Text>{deleteBoardStrings.deleteBoardTitle}</Text>
          <Text variant="body1">
            {deleteBoardStrings.deleteBoardSubtitle} "{boardName}"?
          </Text>
        </div>
        <div
          className={deleteBoardDivVariants({ variant: "buttonsContainer" })}
        >
          <Button variant="cta" onClick={onClose}>
            {deleteBoardStrings.ctaCancelDeleteBoard}
          </Button>
          <Button
            variant="primaryDestructive"
            onClick={handleDeleteBoard}
            isLoading={loading}
          >
            {deleteBoardStrings.ctaDeleteBoard}
          </Button>
        </div>
      </div>
    </>
  );
}
