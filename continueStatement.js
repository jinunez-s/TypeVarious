test_one : for (let index = 0; index < 9; index++) {
    if(index == 2){
        continue test_one;
    }
    
    innet_loop:for(let g = 0; g < 10; g++){
        if(g == 3 ) break;
        if(index == 4) break innet_loop;
        if(index == 8) break test_one;
        console.log("g", g);
    }
    console.log("index:" , index);
}

test_two: for (let j = 0; j < 26; j++) {
    if(j ==  8){
        break test_two;
    }
    //console.log("j:", j);
}