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
  const [loginMutation, { loading }] = useMutation(CreateBoardDocument, {
    onCompleted,
    onError,
  });

  const createBoard = (variables: CreateBoardMutationVariables) => {
    loginMutation({ variables });
  };

  return { createBoard, loading };
}
