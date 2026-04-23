import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Parent from './Parent';
export default function Home() {
    const [imgWidth, setWidth] = useState("w-100")

    let x = 100
    let d = ""
    if (x > 50) {
        d = <div className="greentext">
            Hi how are you?
        </div>
    } else {
        d = <div className="redtext">
            Good Bye
        </div>
    }

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12">
                    {d}
                    <h1>Welcome to Home Page</h1>
                    <img className={imgWidth} src="https://cdn.pixabay.com/photo/2024/02/11/17/09/mountains-8567074_1280.jpg" alt="" />
                    <div>
                        <select onChange={(e) => setWidth(e.target.value)} name="" id="">
                            <option value="w-25">25%</option>
                            <option value="w-50">50%</option>
                            <option value="w-75">75%</option>
                            <option selected value="w-100">100%</option>
                        </select>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias mollitia obcaecati, iusto quis explicabo sit aut dolore quam. Impedit tenetur excepturi minus delectus reiciendis, porro totam perferendis adipisci non voluptatem aperiam, odit earum nulla velit esse quia omnis perspiciatis unde id ut veritatis quos dolor? Doloremque distinctio, quisquam velit corporis minima saepe. Laudantium magni harum, quam eveniet eius consequuntur, corrupti, unde fugit excepturi accusantium ratione iure molestias! Voluptate at nulla quos alias architecto porro ut beatae doloribus iure impedit. Voluptatibus provident quaerat, quae omnis, quos voluptatum vero doloremque voluptatem fugit nobis nulla fuga quasi culpa cum suscipit dolore et similique delectus? Magnam provident, non porro consectetur corporis consequatur ut perferendis dignissimos amet nobis qui expedita minima officiis a quaerat ad?
                    </p>

                    <Link to='/parent'>Parent</Link>

                </div>
            </div>
        </div>
    );
}