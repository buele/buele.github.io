var hyd = require('hydrolysis');

hyd.Analyzer.analyze('template-component.html')
    .then(function(analyzer) {
      var obj = analyzer.elementsByTagName['template-component'];
      console.log(obj);
    });
