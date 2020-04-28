import React, { useCallback, ChangeEventHandler } from "react";
import cx from "classnames";
import { useMount } from "react-use";
import { Option } from "./types";

import "./shared.scss";
import { useGridArea } from "../../hooks/useGridArea";
import { useId } from "../../hooks/utils/useId";

interface Props {
  choices: Option[];
  selected?: string;
  className?: string;
  transparent?: boolean;
  inline?: boolean;
  primaryColor?: boolean;
  onChange: (newValue: string) => void;
  gridArea?: string;
}

export const Dropdown = ({
  choices,
  selected,
  className,
  transparent,
  inline,
  primaryColor,
  onChange,
  gridArea,
}: Props) => {
  const id = useId();

  useMount(() => {
    if (choices.length && !choices.some(({ value }) => selected === value)) {
      onChange(choices[0].value);
    }
  });

  return (
    <div
      className={cx(
        "dropdown",
        primaryColor && "primary",
        inline && "inline",
        useGridArea(gridArea ?? "input"),
      )}
    >
      <select
        name={id}
        id={id}
        value={selected}
        onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
          e => {
            onChange(e.target.value);
          },
          [onChange],
        )}
        className={cx(
          "select",
          transparent && "transparent",
          className,
        )}
      >
        {choices.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div className="caret" />
    </div>
  );
};
