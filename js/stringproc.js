function Choose(){
    var choice = document.forms["strform"]["choice"].value;
    if(choice=="z"){
        Z();
    }else if(choice == "badchar"){
        PreBad();
    }
}

function Z(){
    var str = document.forms["strform"]["str"].value;
    var strlen = str.length;
    var l =0;
    var r=0;
    var z=[];
    var tab = "<p>Red = Current Z[] | Green = Current k </p><table> <tr>";

    //Writes out String for table
    for(var i = 0; i<strlen; i++){
        tab = tab + "<td>" + str.charAt(i) + "</td>";
    }
    tab = tab + "<td>" + "l, r, k values" + "</td>";
    tab = tab + "</tr>";

    //Establish all z's as zero and initial add row to table
     tab = tab + "<tr>";
    for(var i = 0; i<strlen; i++){
        z[i]=0;
        tab = tab + "<td>" + "0" + "</td>";
    }
    tab = tab + "<td>" + "l="+l+" r="+r+" k=0" + "</td>";
    tab = tab + "</tr>";

    for(var k=1; k<strlen; k++){
        if(k>r){
            l=k;
            r=k;
            while(r<strlen && str.charAt(r)==str.charAt(r-l)){
                z[k]+=1;
                r+=1;
            }
            if(z[k]>0){
                r=(k+z[k]-1);
                //l=k;
            }
            console.log(z[k]);
        }
        else{
            if(z[k-l]<r-k){
                z[k]=z[k-l];
            }else{
                l=k;
                r=k;
                while(r<strlen && str.charAt(r)==str.charAt(r-l)){
                    z[k]+=1;
                    r+=1;
                }
            }
        }

        //Print current z[] to show in table
        tab = tab + "<tr>";
        for(var i = 0; i<strlen; i++){
            if(i==k){
                tab = tab + "<td style='background-color:green'>" + z[i] + "</td>";
            }else if(i==l || i==r){
                tab = tab + "<td style='background-color:red'>" + z[i] + "</td>";

            }else{
                tab = tab + "<td>" + z[i] + "</td>";
            }

        }
        tab = tab + "<td>" + "l="+l+" r="+r+" k="+k + "</td>";
        tab = tab + "</tr>";
    }

    var tab = tab + "</table>";

    document.getElementById("result").innerHTML = tab;
    
    
}

function PreBad(){
    var str = document.forms["strform"]["str"].value;

    var strlen = str.length;
    var result = [strlen];
    var tab = "<p>Red = Matching Character | Green = Current Character</p><table> <tr>";
    var count;

    //Writes out String for table
    for(var i = 0; i<strlen; i++){
         tab = tab + "<td>" + str.charAt(i) + "</td>";
    }
    tab = tab + "</tr>";

    //initiates table with zero's and appends first line for table

    tab = tab + "<tr>";
    for(var i = 0; i<strlen; i++){
        result[i]=0;
        tab = tab + "<td>" + "0" + "</td>";
    }
    tab = tab + "</tr>";


    
  	for(i= strlen-1;i>0; i--){
    	count=1;
    	for(j=i-1; j>=0; j--){
        	if(str.charAt(i)==str.charAt(j)){

            	result[i]=count;
                break;
            }
            count++;
        }

        tab = tab + "<tr>";
        for(var w = 0; w<strlen; w++){
            if(w==i){
                tab = tab + "<td style='background-color:green'>" + result[w] + "</td>";
            }else if(w==j){
                tab = tab + "<td style='background-color:red'>" + result[w] + "</td>";

            }else{
                tab = tab + "<td>" + result[w] + "</td>";
            }        }
        tab = tab + "</tr>";

    }

    tab = tab+"</table>";


    
    document.getElementById("result").innerHTML = tab;
}


document.getElementById("btn").addEventListener("click", Choose);