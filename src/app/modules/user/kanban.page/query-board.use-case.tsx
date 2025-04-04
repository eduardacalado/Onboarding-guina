import {
  QueryBoardDocument,
  QueryBoardQuery,
  QueryBoardQueryVariables,
} from "@/app/data/graphql/generated/graphql";
import { useQuery } from "@apollo/client";

type UseQueryBoardProps = {
  variables: QueryBoardQueryVariables;
  onCompleted?: (data?: QueryBoardQuery) => void;
  onError?: (error: Error) => void;
};

export const useQueryBoard = ({
  variables,
  onCompleted,
  onError,
}: UseQueryBoardProps) => {
  const { data, loading } = useQuery(QueryBoardDocument, {
    variables: variables,
    onCompleted,
    onError,
  });

  return { data, loading };
};
