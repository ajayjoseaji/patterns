

const printPattern =(count)=>{
    let complexity =0
    let lineString=""
    for(i=0;i<count; i++) {
        complexity++
        for(j=0;j<count-i; j++) {
            complexity++
            lineString+=" "
        }
        for(k=0;k<count;k++) {
            complexity++
            if(k===0||k===count-1||i===0||i===count-1) lineString+="*"
                else lineString+=" "
        }
        console.log(lineString)
        lineString=""
    }
    console.log("complexity:", complexity)
}

printPattern(4)
