import AutoCounter from "components/AutoCounter/AutoCounter";
import Counter from "components/Counter/Counter";
import { FC } from "react";
import { CounterType } from "types/types";
import { isFourth } from "utils/isFourth";

import classes from "./styles.module.css";

type Props = {
  onCounterIncrement: (counter: CounterType) => void;
  onCounterRemove: (counterId: string) => void;
  onCounterDecrement: (counter: CounterType) => void;
  counters: CounterType[];
};

const Counters: FC<Props> = (props) => {
  const { counters, onCounterDecrement, onCounterIncrement, onCounterRemove } =
    props;

  const handlerCounterRemove = (counterId: string) => {
    onCounterRemove(counterId);
  };
  return (
    <div className={classes.root}>
      <>
        {counters.map((counter, index) => {
          if (isFourth(index + 1)) {
            return (
              <AutoCounter
                counter={counter}
                onCounterIncrement={onCounterIncrement}
                onCounterRemove={handlerCounterRemove}
                key={counter.id}
              />
            );
          }
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onCounterIncrement={onCounterIncrement}
              onCounterDecrement={onCounterDecrement}
              onCounterRemove={handlerCounterRemove}
            />
          );
        })}
      </>
    </div>
  );
};

export default Counters;
