import { Children, cloneElement, isValidElement, useState, type ReactElement } from "react";

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

    return <div>{Children.map(children, (child, index) => (isValidElement(child) ? cloneElement(child as ReactElement<TabChildProps>, { activeTab, setActiveTab, index }) : child))}</div>;
}
