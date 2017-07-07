var add = function(ans1, ans2, ans3, ans4, ans5) {
  return ans1 + ans2 + ans3 + ans4 + ans5;
};

$(document).ready(function(){
  $("#formOne").submit(function(event){
    var answer1=$("input:radio[name=survey1]:checked").val();
    var answer2=$("input:radio[name=survey2]:checked").val();
    var answer3=$("input:radio[name=survey3]:checked").val();
    var answer4=$("input:radio[name=survey4]:checked").val();
    var answer5=$("input:radio[name=survey5]:checked").val();
    var name=$("input#name").val();

    var ans1 = parseInt(answer1);
    var ans2 = parseInt(answer2);
    var ans3 = parseInt(answer3);
    var ans4 = parseInt(answer4);
    var ans5 = parseInt(answer5);

    $("#username").text(name);

    var totalsum = add(ans1, ans2, ans3, ans4, ans5);

    $(".result").fadeIn();

    if (totalsum === 5) {
      $("#csstrack").show();
      $("#javatrack").show();
      $("#phptrack").hide();
      $("#rubytrack").hide();
      $("#csharptrack").show();
    }
    else if (totalsum <= 10) {
      $("#csstrack").show();
      $("#javatrack").show();
      $("#phptrack").hide();
      $("#rubytrack").show();
      $("#csharptrack").hide();
    }
    else {
      $("#csstrack").show();
      $("#javatrack").hide();
      $("#phptrack").show();
      $("#rubytrack").show();
      $("#csharptrack").hide();
    }

    $("#intro").fadeOut();
    $("#formOne").fadeOut();

    event.preventDefault();
  });
});
