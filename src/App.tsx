import Button from "./components/Button";
import ControlledInput from "./components/ControlledInput";
import Counter from "./components/Counter";
import DataProvider from "./components/DataProvider";
import Tab from "./components/Tab";
import Tabs from "./components/Tabs";
import UncontrolledInput from "./components/UncontrolledInput";
import TodoContainer from "./container/TodoContainer";

function App() {
    return (
        <>
            <Button label="Click me" onClick={() => alert("clicked")} />
            <Counter />
            <ControlledInput />
            <UncontrolledInput />
            {/* <TodoContainer /> */}
            {/* <DataProvider render={(data) => (Array.isArray(data) ? <div>{data.join(", ")}</div> : <div>Loading...</div>)} /> */}
            <Tabs>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
            </Tabs>
        </>
    );
}

export default App;
