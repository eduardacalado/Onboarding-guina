import {
  CreateCardDocument,
  CreateCardMutation,
  CreateCardMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";

type useCreateCardProps = {
  onCompleted?: (data?: CreateCardMutation) => void;
  onError?: (error: Error) => void;
};

export function useCreateCard({ onCompleted, onError }: useCreateCardProps) {
  const [createCardMutation, { loading }] = useMutation(CreateCardDocument, {
    onCompleted,
    onError,
  });

  const createCard = (variables: CreateCardMutationVariables) => {
    createCardMutation({ variables });
  };

  return { createCard, loading };
}
