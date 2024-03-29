import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { useToast } from './components/ui/use-toast'

function App() {
  const [count, setCount] = useState(0)
  const {toast} = useToast()

  return (
    <>
    <Button onClick={() => {
        setCount(count+1);
        toast({
          title: "Count updated",
          description: "Your count has been updated"
        })
      }}
>Button</Button>
    <p>{count}</p>
    </>
  )
}

export default App
