---
layout: post
title:  "[python] Add document to solr (silly script)"
date:   2015-11-07 17:32:42
categories: python
---

#### Introduction
 This article is a continue of this [article](http://buele.github.io/solr/2015/11/07/hello-world-solr.html) 

#### Requirements
 - python 3.x 

#### Script to add a document 

{% highlight python %}
import http.client
import json
import sys

connection = http.client.HTTPConnection("localhost",8983)

headers = {'Content-type': 'application/json'}

foo = {'add': {'doc': {'id': sys.argv[1], 'title': sys.argv[2]}, 'boost': 1, 'overwrite': True, 'commitWithin': 1000}}
json_foo = json.dumps(foo)

connection.request('POST', '/solr/core/update?wt=json', json_foo, headers)

response = connection.getresponse()
print(response.read().decode())
{% endhighlight %} 

#### Run script
{% highlight bash %}
$ python3 add_document.py "test_id" "Test Title!"
{% endhighlight %} 


#### Output

{% highlight bash %} 
{"responseHeader":{"status":0,"QTime":8}}
{% endhighlight %}
