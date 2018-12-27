$("#btn").click(function(){
  $.getJSON("https://aws.random.cat/meow")
  .done(function(data){
    $('#cat').attr("src", data.file);
  })
  .fail(function(){
    alert("REQUEST IS NOT PAWSIBBLE");
  })
})
