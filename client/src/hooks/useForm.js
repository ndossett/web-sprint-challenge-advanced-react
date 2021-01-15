// write your custom hook here to control your checkout form
import { useState } from 'react'


const useLocalStorage = (key, initialFormValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        } else  {
            localStorage.setItem(key, JSON.stringify(initialFormValue))
            return initialFormValue
        }
    })

    const setValue = value => {
        setStoredValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}

const useForm = (initialValues) => {
    const [values, setValues] = useLocalStorage('form', initialValues)

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value 
        });
      };

    // const clearForm = e => {
    //     e.preventDefault()
    //     setValues(initialValues)
    // }
    
    return [values, handleChanges, clearForm]
}

export default useForm;