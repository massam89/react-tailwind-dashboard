import { useState } from "react"
import { toast } from "react-toastify"

const useUsernameValidation = () => {
    const [username, setUsername] = useState('')

    const setUsernameHandler = (e) => {
        if(e.target.value.includes(' ')){
          toast.warn('you can not use space in username input!')
          return
        }
        setUsername(e.target.value.trim().toLowerCase())
      } 

  return [username, setUsernameHandler]
}

export default useUsernameValidation
