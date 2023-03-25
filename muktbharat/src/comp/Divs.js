const Divs = props =>{
    return<div className="column" style ={{backgroundImage: `url(${process.env.PUBLIC_URL + props.image})`}}> 
        <h1>hello</h1>
    </div>
}
export default Divs;