
class Orders extends React.Component {

    
    state = {
      isloaded:false,
      person:null
     };
     
    async componentDidMount(){
      const myshopifykeys='21361825a63408714d0cac6e31268754';
      const myshopifypassword='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';

      const url='https://'+myshopifykeys+':'+myshopifypassword+'@anirudhsstore.myshopify.com/admin/api/2020-07/orders.json/?status=any';
      const response=await fetch(url);
      this.setState({person:response,loading: false});
      console.log(response);
      
    }
    render() {
      var {isloaded,person}=this.state;

      if(!isloaded){
        return<div>Loading...</div>
      }
      else{
        return(
          <div>
            {person}
          </div>
        );
      }
      
    }
  }
  export default Orders;