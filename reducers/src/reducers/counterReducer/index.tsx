type StateReducer = { count:number };
type ActionReducer = { type: 'increase' | 'decrease' | 'reset' } | 
  { type: 'increase_5' | 'decrease_5', payload: number };

export const counterInitialState = { count: 0 };

export function counterInit(): StateReducer {
  return {
    count: counterInitialState.count + 100
  }
}

export function counterReducer(state:StateReducer, action:ActionReducer) {
  switch (action.type) {
    case 'increase':
      return {
        count: state.count + 1
      };
    case 'increase_5':
      return {
        count: state.count + action.payload
      }
    case 'decrease':
      return {
        count: state.count - 1
      }
    case 'decrease_5':
    return {
      count: state.count - action.payload
    }
    case 'reset':
      return {
        count: counterInitialState.count
      }
    default:
      return state;
  }
}
