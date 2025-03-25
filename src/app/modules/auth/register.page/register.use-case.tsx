import {
  CreateUserDocument,
  CreateUserMutation,
  CreateUserMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useAuthStore } from "@/app/stores/auth.store";
import { useUserStore } from "@/app/stores/user.store";
import { useMutation } from "@apollo/client";

type useRegisterProps = {
  onCompleted?: (data?: CreateUserMutation) => void;
  onError?: (error: Error) => void;
};

export function useRegister({ onCompleted, onError }: useRegisterProps) {
  const { setUser } = useUserStore();
  const { setToken } = useAuthStore();

  const handleCompleted = (data: CreateUserMutation) => {
    const { user, token } = data.createUser;

    setUser({ id: user.id, name: user.name });
    setToken(token);

    onCompleted?.(data);
  };

  const [registerMutation, { loading }] = useMutation(CreateUserDocument, {
    onCompleted: handleCompleted,
    onError,
  });

  const register = (variables: CreateUserMutationVariables) => {
    registerMutation({ variables });
  };

  return { register, loading };
}
