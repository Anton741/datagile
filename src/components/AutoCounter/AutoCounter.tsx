/* eslint-disable react-hooks/exhaustive-deps */
import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";
import { FC, useEffect } from "react";
import { CounterType } from "types/types";

import classess from "./styles.module.css";

type Props = {
  onCounterIncrement: (counter: CounterType) => void;
  onCounterRemove: (counterId: string) => void;
  counter: CounterType;
};

const AutoCounter: FC<Props> = (props) => {
  const { counter, onCounterIncrement, onCounterRemove } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      onCounterIncrement(counter);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className={classess.root}>
      <div className={classess.counter}>
        <span className={classess.value}>{counter.value}</span>
      </div>
      <Button variant="iconButton" onClick={() => onCounterRemove(counter.id)}>
        <Icon name="deleteIcon" />
      </Button>
    </div>
  );
};

export default AutoCounter;
