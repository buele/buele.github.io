---
layout: post
title:  "[javascript] Palindromes sum (optimized)"
date:   2014-03-17 12:29:41
categories: cuda
---

###Problem 
Sum of the integers in a range (inclusive) that are a palindrome in both base-2 and base-10, ignoring leading zeroes. 

###Algorithm 

####Main approach
The main approach of this solution is: 

 - to generate the list of palindromes (base-10) as strings (complexity O(1)). 
 - to check if the base-2 representation of each base-10 is a palindrome (ignoring leading zeroes) 
 - if the base-2 is a palindrome number too, add the base-10 value to the sum 

####Generation of palindromes (base-10) algorithm:

The approach is to generate palindrome numbers of k digit numbers.
#####e.g. k=4

To generate all palindromes of 4 digits numbers, we could generate all numbers for 2 digits, with leading zeroes like: 

"01"  
"02" 
"03"  
..  
"09"  
"10"  
"11"  
"12"  
..  
"99" 

and to concatenate the number string with its reverse string  

e.g for "01" we will have: "10" + "01" = "1001"  

So for each 2 digit number string with leading number, we have to concatenate it with its reverse string.   

**This approach is good only for numbers with even digits** 

To generate odd digit palindromes number we have to insert inside the middle of each even palindrome numbers a digit (from 0 to 9)  

e.g. for "1001" even palindrome number we have:  
  
"10" + "0" + "01" => "10001"   
"10" + "1" + "01" => "10101"   
"10" + "2" + "01" => "10201"  
...   
"10" + "9" + "01" => "10901"   


**For each palindrome generated we have to check if it is less of max.**

####Generation of ALL palindromes 

It is enough to iterate the "2.2 Generation of palindromes (base-10) algorithm" for the range of number of digits to reach the max value.  




###Implementation in javascript: 


{% highlight javascript %}
function smartPalindromesSum(max){
  var sum = 0
  , digitsMax = Math.round((Math.log(max) / Math.LN10)/2);
  for(var digits = 1; digits &lt;= digitsMax; digits++){
    var localMax = Math.pow(10,digits)-1;
    for (var i = 1; i &lt;= localMax ; i++ ){
      var is = i + '';
      if(is[is.length - 1] != '0'){
        var elm = (new Array(digits-is.length+1).join('0'))+is
        , elmr = reverseString(elm)
        , p10 = parseInt(elmr+elm);
        if(p10 &lt;= max ){
          var p2 = (p10).toString(2)
          , p2r = reverseString(p2);
          if(p2[p2.length -1] != '0' &amp;&amp;
            p2 == p2r)
              sum += p10;
        }
        for(var j = 0; j &lt; 10; j++){
          var p10x = parseInt('' + elmr + j + elm)
          , p2x = (p10x).toString(2)
          , p2rx = reverseString(p2x);
          if(p10x &lt;= max &amp;&amp;
             p2x[p2x.length -1] != '0' &amp;&amp;
             p2x == p2rx )
               sum += p10x;
        }
      }
    }
  }
  return sum;
}
{% endhighlight %} 


###Reverse function 

{% highlight javascript %}
function reverseString(str){
    return str.split('').reverse().join('');
}
{% endhighlight %} 
