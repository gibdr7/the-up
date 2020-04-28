import { useCss } from "react-use";

export const useGridArea = (name: string) =>   
  useCss({
    gridArea: name,
  });
