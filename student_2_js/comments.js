function validation(){
  //validation for radio buttons
  var valid = false;
  var x = document.form.rating;

  for(var i=0; i<x.length; i++){
      if(x[i].checked){
          valid = true;
          break;
      }
  }
  if(valid){
  }
  else{
      alert("Please rate us");
      return false;
  }
  //validation for textarea
  if(document.getElementById('text').value==""){
      alert('Please give reasins for the rating');
      document.getElementById('text').style.borderColor="red";
      return false;
  }

  
}