---
layout: post
title:  "[python] Django Rest Framework seed"
date:   2015-11-07 17:45:42
categories: python
---
 
Setup and run the server   
 

{% highlight bash %} 

$ git clone git@github.com:buele/djangorest.git
$ cd djangorest
$ virtualenv -p python3 env
$ source env/bin/activate
$ pip install -r requirements.txt
$ cd tutorial
$ python manage.py migrate
$ python manage.py createsuperuser
$ python manage.py runserver

{% endhighlight %} 

https://github.com/buele/djangorest

