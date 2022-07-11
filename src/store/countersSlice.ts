import { createEntityAdapter, createSlice, EntityState } from '@reduxjs/toolkit';
import { CounterType} from 'types/types'

type CountersState = {counters: EntityState<CounterType>}

const countersAdapter = createEntityAdapter<CounterType>();

const countersSlice = createSlice({
    initialState: countersAdapter.getInitialState(),
    name:"counters",
    reducers:{
        counterAdd: countersAdapter.addOne,
        counterRemove: countersAdapter.removeOne,
        counterUpdate: countersAdapter.updateOne
    }
})


export const countersSelectors = countersAdapter.getSelectors<CountersState>(
    (state) => state.counters
)

export const countersActions = countersSlice.actions

export default countersSlice.reducer

