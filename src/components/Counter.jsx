import { useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className="d-flex justify-content-center align-items-center vh-100">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center fw-bold" style={{fontSize:100, color:'blue'}}>{count}</h1>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="col-lg-12 ">
                                <div className="d-flex justify-content-center">
                                    <div className="mx-2 text-center">
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => setCount(count + 1)}
                                        >
                                            Increment
                                        </button>
                                    </div>
                                    <div className="mx-2 text-center">
                                        <button
                                            className={`btn btn-danger ${count<=0 ? "disabled" : ""}`}
                                            onClick={() => setCount(count - 1)}
                                            
                                        >
                                            Decrement
                                        </button>
                                    </div>
                                    <div className="mx-2 text-center">
                                        <button
                                            className="btn btn-success"
                                            onClick={() => setCount(0)}
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Counter;