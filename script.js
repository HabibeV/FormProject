$("#buton").click(function(){

    if ($("#OrderingCompany").val()=="" || $("#orderdate").val()=="" || $("#orderdate").val()==""
        ||  $("#ProductName").val()=="" || $("#Piece").val()=="" || $("#Amount").val()=="")

    {
        $("#dangerdiv").addClass('adanger');
            setTimeout(function(){
                $("#dangerdiv").removeClass('adanger');
                 },4000);

        return false;
    }

    else
    {

        $("#hiddentable").addClass('visibility');
        $("#table").append("<tr><td>"+$("#OrderingCompany").val()+
            "</td><td>"+$("#orderdate").val()+
            "</td><td>"+$("#ProductName").val()+
            "</td><td>"+$("#Piece").val()+
            "</td><td>"+$("#Amount").val()+"</td></tr>"); 

        
        $("#ProductName").val("");
        $("#Piece").val("");
        $("#Amount").val("");
    }

    $("#successdiv").addClass('asuccess');
        setTimeout(function(){
            $("#successdiv").removeClass('asuccess');
             },5000);
        
    return false;

   
})


