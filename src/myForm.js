const MyForm = (props) => {
    return (  
        <form onSubmit={props.addQueryParam} className='form-group mt-4 mb-4'>
          <input className='form-control' type="text" name='newParam'/>
          <button className='btn btn-secondary'>add</button>
        </form>
    );
}
 
export default MyForm;