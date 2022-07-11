import { pathOr } from "ramda";
import React, {FC} from "react";

import dictionary from "./dictionary";

type Props = {
  className?: string;
  name: string;
}

const resolveIconId = (name:string):string => {
  return pathOr("", [name, 'id'], dictionary);
};

const Icon: FC<Props> = (props) => {
  const { className, name } = props;

  return (
    <svg className={className}>
      <use xlinkHref={`#${resolveIconId(name)} `} />
    </svg>
  );
};

export default Icon;
