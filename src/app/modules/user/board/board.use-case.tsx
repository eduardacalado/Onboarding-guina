import {
  BoardsDocument,
  BoardsQuery,
  BoardsQueryVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";

type useBoardsProps = {
  onCompleted?: (data?: BoardsQuery) => void;
  onError?: (error: Error) => void;
};

export function useBoards({ onCompleted, onError }: useBoardsProps) {
  const [boardQuery, { loading }] = useMutation(BoardsDocument, {
    onCompleted,
    onError,
  });

  const boards = (variables: BoardsQueryVariables) => {
    boardQuery({ variables });
  };

  return { boards, loading };
}
