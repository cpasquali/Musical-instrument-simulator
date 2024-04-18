import { useState } from "react"

const useTogleShowNotes = () => {
    const [show, setShow] = useState(false);

    const togleShowNotes = () => {
        setShow(!show);
    };

    return { show, togleShowNotes }
};

export default useTogleShowNotes;