function litBulbs(num_of_bulbs) {

    var value = Math.sqrt(num_of_bulbs);
    var onBulbs = 0;
    var bulb = 1;
    var person = 1;

     // looping over all bilbs from the 1 to 100
    for (bulb=1; bulb <= num_of_bulbs; bulb++) {
        var factor =0;

        // looping over all persons
        for (person =1; person*person<= num_of_bulbs; person++) {
            if (bulb%person == 0) {
                factor++;
                if (bulb/person != person) {
                    factor++;
                }
            } 
        }
    }

    if (factor%2 == 1) {
        onBulbs++;
    }

    for ( i = 1; i < value + 1; i++)  
    {  
        console.log("Light bulb ",(i*i)," will be skipped and left on");  
    }  
      
    console.log("Total of ", value, " light bulbs will left be on out of ", num_of_bulbs);  

    
    return onBulbs;
}

litBulbs(100);
