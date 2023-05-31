/*
 *
 *       <div id="parent">
 *
 *                <div id="child">
 *                <h1>I'm an h1 tag</h1>
 *                <h2>I'm an h2 tag</h2>
 *                </div>
 *
 *                 <div id="child">
 *                <h1>I'm an h1 tag</h1>
 *                <h2>I'm an h2 tag</h2>
 *                </div>
 *        </div>
 *
 * ReactElement(object)=>HTML(browser understands)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
