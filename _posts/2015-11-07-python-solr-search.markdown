---
layout: post
title:  "[python] Search Document with solr (silly script)"
date:   2015-11-07 17:38:42
categories: python
---

#### Introduction
 This article is a continue of this [article](http://buele.github.io/solr/2015/11/07/python-solr-add-document.html) 

#### Requirements
 - python 3.x 

#### Script to search a document

{% highlight python %}
import http.client
import json
import sys

connection = http.client.HTTPConnection("localhost",8983)

headers = {'Content-type': 'application/json'}


connection.request('GET', '/solr/core/select?wt=json&indent=true&q='+str(sys.argv[1]))

response = connection.getresponse()
print(response.read().decode())	
{% endhighlight %} 

#### Run script
{% highlight bash %}
$ python3 search.py "Title"
{% endhighlight %} 


#### Output

{% highlight bash %} 
{
  "responseHeader":{
    "status":0,
    "QTime":1,
    "params":{
      "q":"Title",
      "indent":"true",
      "wt":"json"}},
  "response":{"numFound":1,"start":0,"docs":[
      {
        "title":["Test Title"],
        "id":"test_id",
        "_version_":1517199912564948992}]
  }}

{% endhighlight %}
