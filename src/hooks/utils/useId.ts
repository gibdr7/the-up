import { useState } from "react";
import { id } from "../../utils/id";

export const useId = () => {
  const [state] = useState(id);

  return state;
};
