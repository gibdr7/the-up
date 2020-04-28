import React, { useCallback, MouseEventHandler } from "react";
import cx from "classnames";
import { Option } from "./types";

import "./shared.scss";

interface SingleSelectProps {
  dark?: boolean;
  large?: boolean;
  separate?: boolean;
  shrink?: boolean;
  className?: string;
  choices: Option[];
  selected: string | undefined;
  multi?: undefined;
  activeClassName?: string;
  tabClassName?: string;
  onChange?: (newValue: string) => void;
}

interface MultiSelectProps
  extends Omit<SingleSelectProps, "selected" | "multi" | "onChange"> {
  selected: string[] | undefined;
  multi: true;
  onChange?: (newValue: string[]) => void;
}

type Props = SingleSelectProps | MultiSelectProps;

const isSelected = (val, selected, multi) =>
  (multi ? selected && selected.includes(val) : selected === val);

export const Tabs = ({
  dark,
  large,
  separate,
  shrink,
  className,
  choices,
  selected,
  onChange,
  multi,
  activeClassName,
  tabClassName,
}: Props) => {
  const onClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    e => {
      if (
        !multi &&
        e.target &&
        onChange &&
        e.currentTarget.value !== selected
      ) {
        onChange(e.currentTarget.value as any);
        return;
      }

      if (multi && e.target && onChange) {
        if (!selected) {
          onChange([e.currentTarget.value] as any);
        } else if (!selected.includes(e.currentTarget.value)) {
          onChange([...selected, e.currentTarget.value] as any);
        } else {
          onChange(
            (selected as any).filter(val => val !== e.currentTarget.value),
          );
        }
      }
    },
    [multi, onChange, selected],
  );

  return (
    <div
      className={cx(
        "tabSet",
        separate && "separate",
        shrink && "shrink",
        className,
      )}
    >
      {choices.map(({ value, label }) => (
        <button
          type="button"
          key={value}
          className={cx(
            "tab",
            dark && "dark",
            large && "large",
            isSelected(value, selected, multi) && activeClassName,
            isSelected(value, selected, multi) && "active",
            tabClassName,
          )}
          onClick={onClick}
          value={value}
          title={value}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
