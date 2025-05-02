function Wrapper({ children, color = "green", name }) {
    console.log(children,color,name);
    return (
        <div style={{ color: color, border: '5px solid green', width: '300px', marginBottom: '7px' }}>
            {children}
            {name}
        </div>
    )
}

export default Wrapper;