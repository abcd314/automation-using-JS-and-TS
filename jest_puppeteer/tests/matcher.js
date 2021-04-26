test("Equality",async()=>{

    expect(2*2).toBe(4);
    expect(4-2).not.toBe(1);

});

test("Truthiness",async()=>{
        var name="Afour";
        var n = null;
        expect(n).toBeNull();
        expect(name).not.toBeNull();
      
        // name has a valid value
        expect(name).toBeTruthy();
    
        
        // pass - null treated as false or negative
        expect(n).toBeFalsy();
      
        // 0 - treated as false
        expect(0).toBeFalsy();
      

});

test("number operator",async()=>{
 
        var num1 = 100;
        var num2 = -20;
        var num3 = 0;
      
        // greater than
        expect(num1).toBeGreaterThan(10)
      
        // less than or equal
        expect(num2).toBeLessThanOrEqual(0)
      
        // greater than or equal
        expect(num3).toBeGreaterThanOrEqual(0)
      

});

test("String matcher",async()=>{

    var string1 = "software testing help - a great resource for testers"
    var string2 = "software testing help - a great resource for testers"
 
        // test for success match
        expect(string1).toMatch(string2);
      
        // test for failure match
        expect(string1).not.toMatch(/abc/);
    

});