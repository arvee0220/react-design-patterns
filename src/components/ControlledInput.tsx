import { useState } from "react";

export default function ControlledInput() {
    const [value, setValue] = useState<string | null>(null);

    return <input value={value ?? ""} onChange={(e) => setValue(e.target.value)} />;
}
