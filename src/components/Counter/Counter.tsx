import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";
import { FC } from "react";
import { CounterType } from "types/types";

import classes from "./styles.module.css";

type Props = {
  onCounterIncrement: (counter: CounterType) => void;
  onCounterRemove: (counterId: string) => void;
  onCounterDecrement: (counter: CounterType) => void;
  counter: CounterType;
};
const Counter: FC<Props> = (props) => {
  const { counter, onCounterDecrement, onCounterIncrement, onCounterRemove } =
    props;

  const handlerIncrement = () => {
    onCounterIncrement(counter);
  };

  const hanlerDerement = () => {
    onCounterDecrement(counter);
  };

  const isButtonDisable = counter.value === 0;

  return (
    <div className={classes.root}>
      <div className={classes.counter}>
        <Button variant="iconButton" onClick={handlerIncrement}>
          <Icon name="plus" />
        </Button>
        <span className={classes.value}>{counter.value}</span>
        <Button
          variant="iconButton"
          onClick={hanlerDerement}
          isDisabled={isButtonDisable}
        >
          <Icon name="minus" />
        </Button>
      </div>
      <Button variant="iconButton" onClick={() => onCounterRemove(counter.id)}>
        <Icon name="deleteIcon" />
      </Button>
    </div>
  );
};

export default Counter;
