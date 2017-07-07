$(document).ready(function(){
  $("#formOne").submit(function(event){
    var answer1=$("input:radio[name=survey1]:checked").val();
    var answer2=$("input:radio[name=survey2]:checked").val();
    var answer3=$("input:radio[name=survey3]:checked").val();
    var answer4=$("input:radio[name=survey4]:checked").val();
    var answer5=$("input:radio[name=survey5]:checked").val();

    var ans1 = parseInt(answer1);
    var ans2 = parseInt(answer2);
    var ans3 = parseInt(answer3);
    var ans4 = parseInt(answer4);
    var ans5 = parseInt(answer5);



    $("#intro").hide();
    $("#forOne").hide();


    event.preventDefault();
  });
});
