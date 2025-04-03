import { Button, Text } from "@/app/atomic";
import { deleteBoardStrings } from "./delete-board.strings";
import { useDeleteBoard } from "./delete-board.use-case";

type DeleteBoardModalProps = {
  boardId: string;
  boardName: string;
  onBoardDeleted: () => void;
};

export function DeleteBoardModal({
  boardId,
  boardName,
  onBoardDeleted,
}: DeleteBoardModalProps) {
  const { deleteBoard, loading } = useDeleteBoard({
    onCompleted() {
      onBoardDeleted();
    },
    onError() {},
  });

  function handleDeleteBoard() {
    deleteBoard({ boardId });
  }

  return (
    <>
      <div className="flex flex-col w-full gap-lg">
        <div className="flex flex-col justify-center">
          <Text>{deleteBoardStrings.deleteBoardTitle}</Text>
          <Text variant="body1">
            {deleteBoardStrings.deleteBoardSubtitle}"{boardName}"?
          </Text>
        </div>
        <div className="flex gap-md">
          <Button variant="cta">
            {deleteBoardStrings.ctaCancelDeleteBoard}
          </Button>
          <Button
            variant="primaryDestructive"
            onClick={() => handleDeleteBoard()}
            isLoading={loading}
          >
            {deleteBoardStrings.ctaDeleteBoard}
          </Button>
        </div>
      </div>
    </>
  );
}
