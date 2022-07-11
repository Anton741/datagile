import classnames from "classnames";
import { FC, MouseEventHandler, ReactNode } from "react";

import classes from "./styles.module.css";

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
  variant: string;
  onClick: MouseEventHandler;
};

const Button: FC<Props> = (props) => {
  const { children, className, isDisabled, onClick, variant } = props;
  const buttonClassName = classnames(classes.root, className, classes[variant]);
  return (
    <button disabled={isDisabled} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
