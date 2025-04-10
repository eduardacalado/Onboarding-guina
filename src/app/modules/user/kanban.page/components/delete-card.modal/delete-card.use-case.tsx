import {
  DeleteCardDocument,
  DeleteCardMutation,
  DeleteCardMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";

type useDeleteCardProps = {
  onCompleted?: (data?: DeleteCardMutation) => void;
  onError?: (error: Error) => void;
};

export function useDeleteCard({ onCompleted, onError }: useDeleteCardProps) {
  const [deleteCardMutation, { loading }] = useMutation(DeleteCardDocument, {
    onCompleted,
    onError,
  });

  const deleteCard = (variables: DeleteCardMutationVariables) => {
    deleteCardMutation({ variables });
  };

  return { deleteCard, loading };
}
