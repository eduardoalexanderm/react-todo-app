import React from "react";
import { Skeleton } from "./TodosLoading/Skeleton";

function TodosLoading() {
  return (
    <div>
      <Skeleton width="100%" height="50px" />
    </div>
  );
}

export { TodosLoading };