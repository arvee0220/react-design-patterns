import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("count updated", count);
    }, [count]);

    return <button onClick={() => setCount(count + 1)}>Click me</button>;
}
