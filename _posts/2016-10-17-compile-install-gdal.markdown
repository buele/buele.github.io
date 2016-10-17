---
layout: post
title:  "[remote sensing/c++] Compile and install gdal"
date:   2016-10-17 01:10:42
categories: c++
---

### Goal
Compile and install gdal library on debian linux

### Requirements
 - g++ 4.9.2
 - wget 1.16
 - make 4.0
 - unzip 6.0


### Download gdal library source code



{% highlight bash %}
wget http://download.osgeo.org/gdal/2.1.1/gdal211.zip
{% endhighlight %}

### Unzip gdal source code
{% highlight bash %}
unzip gdal211.zip
{% endhighlight %}

### Compile source code
{% highlight bash %}
cd gdal-2.1.1
./configure
make
{% endhighlight %}


### Install gdal 2
{% highlight bash %}
su
make install
{% endhighlight %}

### Libraries location
{% highlight bash %}
cd /usr/local/lib/
{% endhighlight %}

### Include location
{% highlight bash %}
cd /usr/local/include/
{% endhighlight %}
