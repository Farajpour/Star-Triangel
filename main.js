var x , y ;

document.write('<center>');

for (x = 1 ; x <= 7 ; x++)
{
    for (y = 1 ; y <= x ; y++)
    {
        document.write('<img src="./Star.png" width="100px"/>');
    }
    
    document.write('<br/>');
}