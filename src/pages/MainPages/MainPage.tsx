import Button from "components/Button/Button";
import Counters from "components/Counters/Counters";
import NoDataMessage from "components/NoDataMessage/NoDataMessage";
import useCounters from "hooks/useCounters";
import { isEmpty } from "ramda";
import { v4 as uuid } from "uuid";

import classes from "./styles.module.css";

const MainPage = () => {
  const {
    addCounter,
    counters,
    decrementCounter,
    incrementCounter,
    removeCounter,
  } = useCounters();

  const handlerCounterAdd = () => {
    const newCounter = counters.reduce(
      (acc, counter) => ({ ...acc, value: acc.value + counter.value }),
      { id: uuid(), value: 0 }
    );
    addCounter(newCounter);
  };

  return (
    <div className={classes.root}>
      <Button
        variant="standart"
        onClick={handlerCounterAdd}
        className={classes.addButton}
      >
        Add counter
      </Button>
      <Counters
        onCounterDecrement={decrementCounter}
        onCounterRemove={removeCounter}
        onCounterIncrement={incrementCounter}
        counters={counters}
      />
      {isEmpty(counters) && (
        <NoDataMessage>You don't have any counters</NoDataMessage>
      )}
    </div>
  );
};

export default MainPage;
