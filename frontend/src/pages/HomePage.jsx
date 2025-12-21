import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getOutgoingFriendReqs,
  getRecomendedUsers,
  getUserFriends,
  sendFriendRequest,
} from "../lib/api";
import { useEffect, useState } from "react";

const HomePage = () => {
  const queryClient = useQueryClient();
  const { outgoingRequestsId, setOutgoingRequestsId } = useState(new Set());
  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });
  const { data: recomendedUsers = [], isLoading: loadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: getRecomendedUsers,
  });
  const { data: outgoingFriendRequest = [] } = useQuery({
    queryKey: ["outgoingFriendRequest"],
    queryFn: getOutgoingFriendReqs,
  });

  const { mutate: sendRequestMutation, isPending } = useMutation({
    mutationFn: sendFriendRequest,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["outgoingFriendRequest"] }),
  });

  useEffect(() => {
    const outgoingIds = new Set();
    if (outgoingFriendRequest && outgoingFriendRequest.length > 0) {
      outgoingFriendRequest.forEach((req) => {
        outgoingIds.add(req.id);
      });
    }
  }, [outgoingRequestsId]);
  return <div>HomePage</div>;
};

export default HomePage;
