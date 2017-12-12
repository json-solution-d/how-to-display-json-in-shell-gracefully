# how-to-display-json-in-shell-gracefully
* use prettyj node package
  + npm i prettyj -g
* define a alias in ~/.bashrc:
  + alias node-json='node-json() { node $1 > ~/tmp.json &amp;&amp; prettyj &lt; ~/tmp.json; }; node-json ';
* output json string by using js sytax like bellow:
  + console.log(JSON.stringify(obj));
* run command to view the pretty output of regular json string;
  + node-json example.js

---
The output in shell would look like below:
```
{
    "a": 1,
    "b": 2,
    "c": [
        3,
        4,
        {
            "d": {
                "e": 5
            },
            "f": {
                "e": 8
            }
        }
    ],
    "d": 7
}
```

# Special Attention
* The output of the nodejs file must be a regular regexp, if not, you would got the error in shell: 
 - SyntaxError: Unexpected token a in JSON at position 0
 - SyntaxError: Unexpected token u in JSON at position 0
 - SyntaxError: Unexpected token / in JSON at position 0
 - ...


