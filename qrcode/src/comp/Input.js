const Input = (props) => {
   return   <div className="input">
    <input type = 'text' placeholder="e.g. facebook.com" value={props.ug} onChange={(evt)=>props.ust(evt.target.value)}/>
    <button onClick={props.generate}>Generate</button>
    </div>
}
export default Input;