import {
  UpdateCardOrderDocument,
  UpdateCardOrderMutation,
  UpdateCardOrderMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";

type useUpdateCardOrderProps = {
  onCompleted?: (data?: UpdateCardOrderMutation) => void;
  onError?: (error: Error) => void;
};

export function useUpdateCardOrder({
  onCompleted,
  onError,
}: useUpdateCardOrderProps) {
  const [updateCardOrderMutation, { loading }] = useMutation(
    UpdateCardOrderDocument,
    {
      onCompleted,
      onError,
    }
  );

  const updateCardOrder = (variables: UpdateCardOrderMutationVariables) => {
    updateCardOrderMutation({ variables });
  };

  return { updateCardOrder, loading };
}
