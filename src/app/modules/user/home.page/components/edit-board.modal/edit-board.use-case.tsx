import {
  EditBoardDocument,
  EditBoardMutation,
  EditBoardMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";

type useEditBoardProps = {
  onCompleted?: (data?: EditBoardMutation) => void;
  onError?: (error: Error) => void;
};

export function useEditBoard({ onCompleted, onError }: useEditBoardProps) {
  const [editBoardMutation, { loading }] = useMutation(EditBoardDocument, {
    onCompleted,
    onError,
  });

  const editBoard = (variables: EditBoardMutationVariables) => {
    editBoardMutation({ variables });
    // console.log(editBoard);
  };

  return { editBoard, loading };
}
