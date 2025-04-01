import {
  ChevronLeftIcon,
  ChevronRight,
  ImagePlaceholderIcon,
  PlusIcon,
} from "@/app/assets/svg";
import { Button, Text, Modal } from "@/app/atomic";
import { homeStrings } from "./home.strings";
import { useState } from "react";
import { CreateBoardModal } from "./components/create-board.modal/create-board.modal";
import { Board } from "@/app/atomic/mol.board/board.component";
import { useBoards } from "../board/board.use-case";

import { toast } from "react-toastify";
import { BoardListSkeleton } from "./components/skeleton/board-list.skeleton";
import { EmptyBoardList } from "./components/empty-board-list/empty-board-list.component";

type CardProps = {
  id: number;
  title: string;
};

export function HomePage() {
  const [hasCreatedBoard, setHasCreatedBoard] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 9;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalBoards, setBoards] = useState<CardProps[]>([]);
  const { boards, loading, refetch } = useBoards({
    variables: {
      pageInput: { limit: limit, offset: (currentPage - 1) * limit },
    },
    onCompleted(data) {
      if (data?.boards?.nodes?.length) {
        setBoards(
          data.boards.nodes.map((board) => ({
            id: Number(board.id),
            title: board.name,
          }))
        );
      }
    },
    onError(error) {
      const errorMessage = error.message || homeStrings.errorMessage;
      toast.error(errorMessage);
    },
  });
  const hasNextPage = boards?.pageInfo?.hasNextPage;
  const hasPreviousPage = boards?.pageInfo?.hasPreviousPage;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleCreateBoard = () => {
    setIsModalOpen(false);
    setHasCreatedBoard(true);
    refetch();
  };

  function renderHomeContent() {
    const isBoardListEmpty = totalBoards.length === 0 && !hasCreatedBoard;

    if (loading) {
      return <BoardListSkeleton />;
    }

    if (isBoardListEmpty) {
      return <EmptyBoardList handleOpenModal={() => setIsModalOpen(true)} />;
    }

    return (
      <div className="flex flex-col gap-lg">
        <div className="flex flex-wrap justify-start items-stretch gap-lg">
          <button
            className="flex flex-[0_0_265px] flex-col border border-sm border-gray-light rounded-sm items-center justify-center min-w-[247px] min-h-[124px] cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <PlusIcon />
            <span className="text-brand-primary-dark font-bold">
              {homeStrings.ctaCreateProject}
            </span>
          </button>
          {boards?.nodes.map((board) => (
            <Board key={board.id} title={board.name} />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <div className="flex gap-sm">
            <Button
              variant="primary"
              onClick={handlePreviousPage}
              disabled={!hasPreviousPage}
              isLoading={loading}
            >
              <ChevronLeftIcon />
            </Button>
            <div className="bg-brand-primary-dark p-sm rounded-md">
              <span className="text-white font-bold">{currentPage}</span>
            </div>
            <Button
              variant="primary"
              onClick={handleNextPage}
              disabled={!hasNextPage}
              isLoading={loading}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-light h-screen px-[142px] py-xl">
      <div className="py-xl">
        <Text variant="heading1">{homeStrings.allProjectsTitle}</Text>
      </div>
      <div className="flex flex-col bg-white p-4xl rounded-md gap-lg">
        {renderHomeContent()}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <CreateBoardModal onProjectCreated={handleCreateBoard} />
        </Modal>
      </div>
    </div>
  );
}
