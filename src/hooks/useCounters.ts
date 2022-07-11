import { useSelector, useDispatch } from "react-redux";
import {countersActions, countersSelectors } from 'store/countersSlice'
import {CounterType} from 'types/types'

type ChangeCounterType = {id:string, changes:{value: number}}

const useCounters = () => {
  const dispatch = useDispatch();
  const {counterAdd, counterRemove, counterUpdate} = countersActions;
  const {selectAll} = countersSelectors;

  const counters = useSelector(selectAll)

  const incrementCounter = (payload:CounterType) => {
    const newValue: ChangeCounterType = {changes: {value: payload.value + 1}, id:payload.id}
    
    dispatch(counterUpdate(newValue))
  }
  
  const decrementCounter = (payload:CounterType) => {
    const newValue: ChangeCounterType = {changes: {value: payload.value - 1}, id:payload.id}
    dispatch(counterUpdate(newValue))
  }

  return {
    addCounter: (payload: CounterType) => dispatch(counterAdd(payload)),
    counters,
    decrementCounter,
    incrementCounter,
    removeCounter: (payload:string) => dispatch(counterRemove(payload))
  }
}

export default useCounters;