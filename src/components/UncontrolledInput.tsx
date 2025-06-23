import { useRef } from "react";

export default function UncontrolledInput() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        console.log(inputRef.current?.value);
    };

    return <input ref={inputRef} onChange={handleSubmit}/>;
}
