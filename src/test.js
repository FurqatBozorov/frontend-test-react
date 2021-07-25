import './test.css';
import MyUL from './myul';
import MyForm from './myForm';

function Test(props) {
   
    let queryString = props.location.search
    queryString=queryString.slice(queryString.indexOf('=')+1)
    let myArr =queryString.split(',')
    
    function addQueryParam(e) {
          e.preventDefault();
          let currentQuery=props.location.search;
          let newQuery = currentQuery+','+e.target.newParam.value
          props.history.push({
              pathname: props.location.pathname,
              search: newQuery
          })
           e.target.newParam.value='';
       }

    function deleteParam(e,item, index) {
           e.preventDefault();
           var filtered = myArr.filter(function(value, index, arr){ 
            return value != item;
        });
        
         let newQuery = '?tags='
        for(let item of filtered){
           newQuery= newQuery + item +',' 
        }
        if(newQuery!="tags="){
            newQuery = newQuery.slice(0,newQuery.length-1)
        }
        
        props.history.push({
            pathname: props.location.pathname,
            search: newQuery
        })

       }

  
    return (
        <div className="container mt-5">
        <h1> Query String Parametrs</h1>
          <MyForm addQueryParam={addQueryParam}/>
          <MyUL params = {myArr} deleteParam={deleteParam}/>      
        </div>
    );
  }
  
  export default Test;
  