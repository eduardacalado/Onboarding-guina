import {
  UpdateCardDocument,
  UpdateCardMutation,
  UpdateCardMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";

type useUpdateCardProps = {
  onCompleted?: (data?: UpdateCardMutation) => void;
  onError?: (error: Error) => void;
};

export function useUpdateCard({ onCompleted, onError }: useUpdateCardProps) {
  const [editBoardMutation, { loading }] = useMutation(UpdateCardDocument, {
    onCompleted,
    onError,
  });

  const updateCard = (variables: UpdateCardMutationVariables) => {
    editBoardMutation({ variables });
  };

  return { updateCard, loading };
}
