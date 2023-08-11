/* 
    <div class="parent">
        <div class="child">
            <h1>Hello I am heading 1</h1>
            <h2>Hello I am heading 1</h2>
        </div>
        <div class="child2">
            <h1>Hello I am heading 1</h1>
            <h2>Hello I am heading 1</h2>
        </div>
    </div> 
*/

const parent = React.createElement("div", { id: "parent" }, 
[React.createElement("div", { id: "child" },
    [React.createElement('h1', {}, "Hello I am heading 1"),
    React.createElement('h2', {}, "Hello I am heading 2")]),

React.createElement("div", { id: "child2" },
    [React.createElement('h1', {}, "Hello I am heading 1"),
    React.createElement('h2', {}, "Hello I am heading 2")])

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)