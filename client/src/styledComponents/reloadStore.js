import { useState } from "react";

export const useReloadState = () => {
  const [reload, setReload] = useState(false);

  const setReloadState = (newReloadState) => {
    setReload(newReloadState);
  };

  return { reload, setReloadState };
};
