import { useState } from "react"

const useToggleShowNotes = () => {
    const [show, setShow] = useState(false);

    const toggleShowNotes = () => {
        setShow(!show);
    };

    return { show, toggleShowNotes }
};

export default useToggleShowNotes;