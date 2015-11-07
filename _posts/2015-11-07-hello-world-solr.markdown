---
layout: post
title:  "[Solr] Hello World Solr"
date:   2015-11-07 16:32:42
categories: solr
---

#### Install solr 
 1. Download: [mirrors](http://www.apache.org/dyn/closer.lua/lucene/solr/5.3.1)
 - Unpack ``` $ tar zxf solr-5.x.x.tgz ```
 
#### Run solr 
 - ``` $ cd solr-5.x.x ```
 - Run: ``` $ bin/solr start ```
 
#### Create core 
 - Create a core with name *core*: ``` $ bin/solr create -c core ```
  
#### Add a document (http request)  
   
{% highlight bash %} 
POST http://localhost:8983/solr/core/update?wt=json
Content-Type: application/json
Content:
{'add': {'doc': {'id': 'test_id', 'title': 'test title'}, 'boost': 1, 'overwrite': true, 'commitWithin': 1000}}
{% endhighlight %}

#### Search a document (http request) 

``` 
GET http://localhost:8983/solr/core/select?wt=json&indent=true&q=title
``` 