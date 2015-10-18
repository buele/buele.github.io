---
layout: post
title:  "[c++] Sieve of Eratosthenes"
date:   2014-05-04 12:29:41
categories: c++
---

The sieve of Eratosthenes is a simple algorithm to find prime numbers in a range.

Algorithm:

{% highlight bash %}
Input: an integer n > 1

 for i = 2, 3, 4, ..., < √n:
  if is_prime[i] is true:
    for j = i2, i2+i, i2+2i, ..., < n :
      A[j] := false
{% endhighlight %} 

Simple C++ implementation (not optimized): 

{% highlight cpp %}
#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

const int FIRST_PRIME = 2;

void show_prime_numbers(std::vector<bool> is_prime){
    for (int i = FIRST_PRIME; i < is_prime.size() ; ++i)
        if (is_prime[i])
            cout << i  << " ";
    cout << endl;
}


/*! \fn std::vector<bool> find_primes(std::vector<bool> is_prime)
 *  \brief return bool array where is_prime[i] == true means i is a prime number
 *  \param is_prime bool array.
 *  \return bool array with true value for prime number as index.
 */
std::vector<bool> find_primes(std::vector<bool> is_prime){
    const int limit = static_cast<int>(std::sqrt(is_prime.size()));
    for (int i = FIRST_PRIME; i <= limit; ++i){
        if (is_prime[i]) {
            for (unsigned j = i*i, n = static_cast<unsigned>(is_prime.size()); j < n; j += i)
                is_prime[j] = false;
        }
    }
    return is_prime;
}


int main(int argc, char *argv[]){
    int n ;
    cout << "insert max number: ";
    cin >> n;
    std::vector<bool> is_prime(n, true);
    
    is_prime = find_primes(is_prime);
    
    show_prime_numbers(is_prime);
    
    return 0;
}

{% endhighlight %}

Execution example:  

{% highlight bash %}
insert max number: 300
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101 103 107 109 113 127 131 137 139 149 151 157 163 167 173 179 181 191 193 197 199 211 223 227 229 233 239 241 251 257 263 269 271 277 281 283 293 
Program ended with exit code: 0
{% endhighlight %}

