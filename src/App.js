import React, {useState} from "react";
import 'semantic-ui-css/semantic.min.css';
import Accordion from "./components/Accordion";
import Search from "./components/SearchBar";
import Translate from "./components/Translate";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Header from "./components/Header";


const items = [
    {
        title: "What is react",
        content: "React is a Front-End Java`script framework"
    },
    {
        title: "Why use React",
        content: "React is favorite JS library among engineers."
    },
    {
        title: "How do you use React",
        content: "You use React by creating components."
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Shade of Blue',
        value: 'blue'
    }
]


export default () => {

    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    label="Select a Color"
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}
