import {
  DeleteBoardDocument,
  DeleteBoardMutation,
  DeleteBoardMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";

type useDeleteBoardProps = {
  onCompleted?: (data?: DeleteBoardMutation) => void;
  onError?: (error: Error) => void;
};

export function useDeleteBoard({ onCompleted, onError }: useDeleteBoardProps) {
  const [deleteBoardMutation, { loading }] = useMutation(DeleteBoardDocument, {
    onCompleted,
    onError,
  });

  const deleteBoard = (variables: DeleteBoardMutationVariables) => {
    deleteBoardMutation({ variables });
  };

  return { deleteBoard, loading };
}
