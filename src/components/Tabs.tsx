import { Children, cloneElement, isValidElement, useEffect, useState, type ReactElement } from "react";

interface TabProps {
    children: ReactElement | ReactElement[];
}

interface TabChildProps {
    activeTab: number;
    setActiveTab: (index: number) => void;
    index: number;
}

// Compound Component Pattern (Parent)
export default function Tabs({ children }: TabProps) {
    const [activeTab, setActiveTab] = useState<number>(0);

    useEffect(() => {
        console.log("Active Tab: ", activeTab);
    }, [activeTab]);

    return <div>{Children.map(children, (child, index) => (isValidElement(child) ? cloneElement(child as ReactElement<TabChildProps>, { activeTab, setActiveTab, index }) : child))}</div>;
}
