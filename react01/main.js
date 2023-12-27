// const container = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
let user = { name: 'andy', age: 22}
let isAdmin = true
let countNum = 0

countNum [countNum,setCountNum] = React.useState(0)

const hdlClick = () => {
    // countNum +=1
    setCountNum(5)
    console.log(countNum)
}
root.render(
    
    <>
    <h1 className="title">Today : {(new Date()).toDateString}</h1>
    <p>Codecamp Academy</p>
    <p>name : {user.name}</p>
    <p>age: {user.age}</p>
    <p>user: {JSON.stringify(user)}</p>
    <p> Welcome, {isAdmin ? "Boss":"Guest" }</p>
    {isAdmin ? <h1>Hello,Admin</h1>
             : <h2>Hi,visitor</h2>}
    <button onClick={hdlClick}>Click {countNum}</button>
    <hr />
    <img src="https://picsum.photos/100"></img>
    <hr />
    <form>
        <input />
    </form>
    </>
);