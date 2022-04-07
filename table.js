document.addEventListener("DOMContentLoaded", function(event) { 

var head_container=document.getElementById("head-container");    
var body_container=document.getElementById("body-container");  
  
// var create_body=document.createElement("tr");
let options={
    method:"GET",
};
fetch("http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/list_all_interviews",options)

    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        // console.log(jsonData);
        var create_heading_row=document.createElement("tr");
        for(var k in jsonData.data[0]){ 
            table_heading=k;
            // console.log(table_heading);
            var create_headerElement=document.createElement("th");
            create_headerElement.innerHTML=table_heading;
            create_heading_row.appendChild(create_headerElement);
            // console.log(create_row);
        }
        head_container.appendChild(create_heading_row);
        console.log(head_container);

        for(var i in jsonData.data){
            let array=jsonData.data[i];
            // console.log(array);
            var create_body_row=document.createElement("tr");
            for(let j in array){
                // console.log(array[j]);
                var create_bodyElement=document.createElement("td");
                create_bodyElement.innerHTML=array[j];
                create_bodyElement.style.textAlign="center";
                create_body_row.appendChild(create_bodyElement);
            }
            console.log(body_container);
            console.log(head_container);
            body_container.appendChild(create_body_row);
        }
        console.log(body_container);
    })   
});
