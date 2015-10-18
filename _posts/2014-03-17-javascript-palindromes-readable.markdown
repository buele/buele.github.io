---
layout: post
title:  "[javascript] Palindromes sum (readable)"
date:   2014-03-17 12:29:41
categories: cuda
---

###Problem 
Sum of the integers in a range (inclusive) that are a palindrome in both base-2 and base-10, ignoring leading zeroes. 

###Algorithm 

To loop from min to max and check if 

 - the iterator value is a palindrome in base-10 
 - the iterator value is a palindrome in base-2 
 - the iterator in base-10 doesn't finish with '0' (ignoring leading zeroes) 
 - the iterator in base-2 doesn't finish with '0' (ignoring leading zeroes) 


###Implementation in javascript: 


{% highlight javascript %}
function easyPalindromesSum(min, max){

  var sum = 0;                        // sum of palindromes     
  for(var i = min; i &lt;= max; i++){
      var is10  = (i).toString()      // base-10 num
      ,   is2   = (i).toString(2)     // base-2  num
      ,   is10r = reverseString(is10) // reverse base-10 num
      ,   is2r  = reverseString(is2); // reverse base-2 num

      if(is10[is10.length-1]!= '0' &amp;&amp; // ignore zeroes 
        is10 == is10r &amp;&amp;              // b-10 palindrome?
        is2[is2.length-1]!= '0' &amp;&amp;    // ignore zeroes
        is2 == is2r)                  // b-2 palindrome?
          sum += i;
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
