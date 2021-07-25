const MyUL = (props) => {
    return ( 
        <ul id='my-list'>
            {
                props.params.map((item,index)=><li onClick={(event)=>props.deleteParam(event,item,index)} key={index} >{item}</li>)
            }
        </ul>
     );
}
 
export default MyUL;