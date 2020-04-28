import React, { ButtonHTMLAttributes } from "react";
import classnames from "classnames";

import "./shared.scss";

const cx = classnames.bind(undefined, "button");

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  centered?: boolean;
  alignRight?: boolean;
  submitting?: boolean;
  large?: boolean;
  dark?: boolean;
  marginless?: boolean;
}

export const Button = ({
  children,
  centered,
  alignRight,
  submitting,
  large,
  dark,
  marginless,
  className,
  ...rest
}: Props) => (
    <button
      type="button"
      className={cx(
        centered && "centered",
        alignRight && "alignRight",
        large && "large",
        dark && "dark",
        marginless && "marginless",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
