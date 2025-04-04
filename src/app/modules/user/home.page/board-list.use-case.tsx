import {
  BoardsDocument,
  BoardsQuery,
  BoardsQueryVariables,
} from "@/app/data/graphql/generated/graphql";
import { useQuery } from "@apollo/client";

type useBoardsProps = {
  variables?: BoardsQueryVariables;
  onCompleted?: (data?: BoardsQuery) => void;
  onError?: (error: Error) => void;
};

export function useBoards({ variables, onCompleted, onError }: useBoardsProps) {
  const { loading, data, refetch } = useQuery<
    BoardsQuery,
    BoardsQueryVariables
  >(BoardsDocument, {
    variables,
    onCompleted,
    onError,
  });

  const boards = data?.boards;

  return { boards, loading, refetch };
}
