import { useState, useCallback } from 'react'

const useInput = (defaultValue: string | null) => {
  const [input, setInput] = useState(defaultValue)
  const onChange = useCallback(e => {
    setInput(e.target.value)
  }, [])

  const onReset = useCallback(() => setInput(''), [])

  return [input, onChange, onReset] as [string, typeof onChange, typeof onReset]
}

export default useInput
