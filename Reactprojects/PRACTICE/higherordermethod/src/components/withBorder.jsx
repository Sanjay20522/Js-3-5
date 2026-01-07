const withBorder = (WrappedComponent)=>{
    return function BorderComponent (props){
        return(
            <div style={{ border:"2px solid red",padding:"10px", textAlign:"center"}}>
            <WrappedComponent {...props}/>
            </div>
        )
    }
}
export default withBorder;