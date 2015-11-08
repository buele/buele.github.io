---
layout: post
title:  "[python/c++] Call Dynamic Library Methods By Python"
date:   2015-11-08 01:10:42
categories: python,c++
---

#### Goal
To call c++ shared library method by python

#### Requirements
 - g++ 4.2.1
 - python 3.x
 
#### C++ Sample Class

**SampleClass.h**

{% highlight c++ %} 
#ifndef __SAMPLE_CLASS_H__
#define __SAMPLE_CLASS_H__

class SampleClass
{
public:
  SampleClass();

  int sum(int a, int b);
};

#endif
{% endhighlight %}

**SampleClass.cc**

{% highlight c++ %} 
#include "SampleClass.h"


SampleClass::SampleClass()
{
}


int SampleClass::sum(int a, int b)
{ 
  return a + b;
}
{% endhighlight %}

#### Python script

{% highlight python %} 
from ctypes import *
cdll.LoadLibrary("mylib.so")
libc = CDLL("mylib.so")
print(libc.sum(3,3))
{% endhighlight %}

#### Compile shared library (os X)
{% highlight bash %} 
$ g++ -dynamiclib -flat_namespace *.cc -o mylib.so
{% endhighlight %}


#### Run python script to call shared library method
{% highlight bash %} 
$ python3 dynamic-library-call.py
{% endhighlight %}

#### Output
{% highlight bash %} 
6
{% endhighlight %}

#### Source code (Github)
[repository](https://github.com/buele/python-cpp-dynamic-library)

