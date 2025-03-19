import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";
import { useAuthStore, useUserStore } from "@/app/stores/index";

type useLoginProps = {
  onCompleted?: (data?: LoginMutation) => void;
  onError?: (error: Error) => void;
};

export function useLogin({ onCompleted, onError }: useLoginProps) {
  const { setUser } = useUserStore();
  const { setToken } = useAuthStore();

  const handleCompleted = (data: LoginMutation) => {
    const { user, token } = data.login;

    setUser({ id: user.id, name: user.name });
    setToken(token);

    onCompleted?.(data);
  };

  const [loginMutation, { loading }] = useMutation(LoginDocument, {
    onCompleted: handleCompleted,
    onError,
  });

  const login = (variables: LoginMutationVariables) => {
    loginMutation({ variables });
  };

  return { login, loading };
}
