$('document').ready(function(){
    var val=16;    
    var $n;
    var c=1;
    var col=0  
    
    tableGrid(); //<--------Starts Here
    function tableGrid(){
        createTable();
        createGrid();
    };
    
    
    function createTable(){
        val=prompt("nXn");
        console.log(val);
        console.log("<table> created id='tbl'");
        $('#cont').append('<table id="tbl"> </table>');
    };
    
    function createGrid(){
        console.log("Grids created");
        var c=1;
        for(var i=1;i<=val;i++)
      {
        $n=$('<tr class='+i+'> </tr>');
        $('#tbl').append($n);
        for(var j=1;j<=val;j++)
        {
         //$('.'+i+'').append($n);
         $('.'+i+'').append('<td class="false" id='+c+'> </td>');  
             console.log(j);
                c++;
        }
      }
    };
    
    $('td').mouseenter(function()
    {
        console.log("Doing!");
        var t=this.id;
        console.log(this.class)
        $('#'+t+'').removeClass('false').addClass('true');
    });
    
    
    $('button').click(function(){
        console.log('refresh');
        $("#tbl").remove();
        console.log("Table Removed");
        tableGrid();
      console.log('Reload Table and Grid');
     });
    
});
