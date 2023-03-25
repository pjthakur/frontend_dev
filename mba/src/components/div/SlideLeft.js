const SlideLeft = (props) =>{
    return (
        <div className="slideL" style ={{backgroundImage: `url(${props.image})`}}>
            <div className="slideL-block">
                {/* <div className="slideL-in"> */}
                <h2>ANEMIA PREVALENCE</h2>
                <hr/>
                <h3>{props.para}</h3>
                {/* </div> */}
            </div>
        </div>
    )
}
export default SlideLeft;