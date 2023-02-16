var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]
console.log (cohortOneStudents.length)
for (var i = 0; i <cohortOneStudents.length; i ++){
    //console.log(cohortOneStudents[i]);
    console.log(i);
    console.log(cohortOneStudents[i]);

    

}



var interests = ["reading","sewing","nature walks", "spending time with my children","napping"]
 var i = 0;
//  var favoriteInterest = "spending time with my children";
//  for(let i= 0; i < Array.length; i++)
    while (i < interests.length){



        if ("spending time with my children" === interests[i]){
            console.log (`My absolute favorite is ${interests[i]}.`)
            i++;
        
        } else {
            console.log("One of my interests is: " + interests[i] + ".");
            i++;
        }     
    

    }


