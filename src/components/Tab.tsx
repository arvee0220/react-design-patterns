import type { ReactNode } from "react";

interface TabProps {
    index?: number;
    activeTab?: number;
    setActiveTab?: (index: number) => void;
    children: ReactNode;
}

// Compound Component Pattern (child)
export default function Tab({ index = 0, activeTab = 0, setActiveTab = () => {}, children }: TabProps) {
    return (
        <button onClick={() => setActiveTab(index)} style={{ fontWeight: activeTab === index ? "bold" : "normal" }}>
            {children}
        </button>
    );
}
