import { ReactNode, useEffect, useReducer } from 'react'
import { AppContext } from './app-context'
import { initialRootState, rootReducer } from './root-reducer'
import { setSudokuState } from './sudoku'

type Props = {
  children: ReactNode
}

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(rootReducer, initialRootState)

  // --- persisting pieces of state in localStorage ---

  // if you want to store the state of a feature (e.g. sudokuState)
  // make sure that your feature supports an action that sets its entire state (e.g. setSudokuState)

  // choose a key to store the state in localStorage
  const key = 'sudoku'

  // after the initial render, check localStorage
  // if a value is present, dispatch the action with the value as payload
  useEffect(() => {
    const localData = localStorage.getItem(key)
    if (localData) {
      dispatch(setSudokuState(JSON.parse(localData)))
    }
  },[])

  // in a second useEffect, we update localStorage when the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state.sudoku))
  }, [state.sudoku])

  // ---

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
