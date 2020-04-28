import React, { InputHTMLAttributes, ChangeEvent } from "react";
import cx from "classnames";

import "./shared.scss";

interface Props {
  id?: string;
  name?: string;
  className?: string;
  onSelect?: (e?: ChangeEvent<HTMLInputElement>) => void;
  isActive?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  marginRight?: boolean;
  marginLeft?: boolean;
  dark?: boolean;
}

export const Checkbox = ({
  id,
  name,
  className,
  onSelect,
  isActive,
  marginLeft,
  marginRight,
  dark,
  inputProps,
}: Props) => (
    <span
      className={cx(
        "checkboxWrapper",
        marginLeft && "marginLeft",
        marginRight && "marginRight",
        dark && "dark",
        className,
      )}
    >
      <input
        id={id}
        type="checkbox"
        name={name}
        className={"fakeCheckbox"}
        checked={isActive}
        onChange={onSelect}
        {...inputProps}
      />
      <span
        className={cx(
          "ag-icon",
          isActive && "ag-icon-checkbox-checked",
          !isActive && "ag-icon-checkbox-unchecked",

          "checkbox",
          isActive && "checked",
        )}
      />
    </span>
  );