import { useState } from "react";

const useToggle = (initialState: boolean): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initialState)

    const toggleState = () => setValue(prevState => !prevState)

    return [value, toggleState]
}

export { useToggle }