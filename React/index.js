const parent = document.getElementById("root")
console.log(parent)
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2",{},"hello react js");




// root.render(h2)
const l=React.createElement("li",{},"orange");
const li=React.createElement("li",{},"Apple");
const ul1=React.createElement("ul",{},l,li);
const div=React.createElement("div",{},h2,ul1);

const h3 = React.createElement("h2",{},"Heading Tag")
const h21 =<h2>Hello Jsx in js</h2>

const l1 = <li>Orange</li>
const l2 = <li>Apple</li>
const l3 =<li>Banana</li>
const l4 = <li>Guavava</li>

const ul = <ul style={{color:'red'}}>{l1}{l2}{l3}{l4}</ul>

const container =(
    <div class="list">
        <div>{ul}</div>
        <div>{div}</div>
        <div>{h21}</div>
    </div>
);


root.render(container)