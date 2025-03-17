import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";

type useLoginProps = {
  onCompleted?: (data?: LoginMutation) => void;
  onError?: (error: Error) => void;
};

export function useLogin({ onCompleted, onError }: useLoginProps) {
  const [loginMutation, { loading }] = useMutation(LoginDocument, {
    onCompleted,
    onError,
  });

  const login = (variables: LoginMutationVariables) => {
    if (loading) return;

    loginMutation({ variables: variables });
  };

  return { login, loading };
}
