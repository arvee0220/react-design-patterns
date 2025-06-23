import { fetchUsers } from "./api/index";
import Button from "./components/Button";
import ControlledInput from "./components/ControlledInput";
import Counter from "./components/Counter";
import DataProvider from "./components/DataProvider";
import { withData } from "./components/HOC";
import Tab from "./components/Tab";
import Tabs from "./components/Tabs";
import UncontrolledInput from "./components/UncontrolledInput";
import UserList from "./components/UserList";
import TodoContainer from "./container/TodoContainer";

const EnhancedUserList = withData(UserList);

function App() {
    return (
        <>
            {/* Stateless component */}
            <Button label="Click me" onClick={() => alert("clicked")} />

            {/* Stateful component */}
            <Counter />
            <ControlledInput />
            <UncontrolledInput />

            {/* Container Presenter Pattern */}
            {/* <TodoContainer /> */}
            {/* Render Props Pattern */}
            {/* <DataProvider render={(data) => (Array.isArray(data) ? <div>{data.join(", ")}</div> : <div>Loading...</div>)} /> */}

            {/* Compound Component Pattern */}
            <Tabs>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
            </Tabs>

            {/* Higher Order Component */}
            <EnhancedUserList fetchData={fetchUsers} />
        </>
    );
}

export default App;
