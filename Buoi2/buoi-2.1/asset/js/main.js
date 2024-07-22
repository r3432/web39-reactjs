// console.log("123456");



//su dung react (chua su dung jsx)

const el=React.createElement("h1",{className:"title"},"hello reacctjs")


//hien thi ra ngoai giao dien voi react
const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(el)