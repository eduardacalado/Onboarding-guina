import {
  CreateBoardDocument,
  CreateBoardMutation,
  CreateBoardMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";

type useCreateBoardProps = {
  onCompleted?: (data?: CreateBoardMutation) => void;
  onError?: (error: Error) => void;
};

export function useCreateBoard({ onCompleted, onError }: useCreateBoardProps) {
  const [createBoardMutation, { loading }] = useMutation(CreateBoardDocument, {
    onCompleted,
    onError,
  });

  const createBoard = (variables: CreateBoardMutationVariables) => {
    createBoardMutation({ variables });
  };

  return { createBoard, loading };
}
