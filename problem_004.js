function sequence(data){
  for(i=1; i<data.length; i++){
if(data[i]> data[i]-1){
  return false;
}
  }
}