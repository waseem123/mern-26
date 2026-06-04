import useAlert from "./UseAlert";

export default function Card({ title, description,no }) {
    let showAlert = useAlert("");
    let handleClick = (n,title)=>{
        showAlert(`Clicked on Button of Card No ${n} -> ${title}`)
    }
    return (
        <div className="card shadow-lg">
            <div className="card-body">
                <h5>{title}</h5>
                <p>
                    {description}
                </p>
                <button onClick={()=>handleClick(no,title)}>Click Me</button>
            </div>
        </div>
    );
}