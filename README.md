# how-to-display-json-in-shell-gracefully
Just use prettyj node package, and define a alias in ~/.bashrc: alias node-json='node-json() { node $1 > ~/tmp.json &amp;&amp; prettyj &lt; ~/tmp.json; }; node-json ';
