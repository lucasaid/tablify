# Tablify

Respond all the tables. Built for bad clients who want tables in their CMS

[Demo](https://lucasaid.github.io/tablify/build/)

Include in your code
* js/tablify-1.0.min.js
* css/tablify-1.0.min.css
* jQuery

Then in your script
```sh
$('table').tablify(); // Or target specific tables with different selector
$('table').tablify(10); // Limits mobile to 10 rows
```


Attach the class ```tablify-ignore``` to hide specific columns on mobile

```sh
<table>
	<tr>
		<th>First Name</th>
		<th class="tablify-ignore">Last Name</th>
		<th>Phone</th>
		<th class="tablify-ignore">Date</th>
		<th>Company</th>
		<th class="tablify-ignore">City</th>
		<th>Country</th>
		<th class="tablify-ignore">Postcode</th>
	</tr>
	<tr>
		<td>Kevin</td>
		<td>Mccray</td>
		<td>(08) 7417 0326</td>
		<td>June 20th, 2016</td>
		<td>Nascetur LLP</td>
		<td>Le Puy-en-Velay</td>
		<td>Austria</td>
		<td>13202</td>
	</tr>
	<tr>
		<td>Emily</td>
		<td>Aguirre</td>
		<td>(06) 0001 4164</td>
		<td>October 17th, 2016</td>
		<td>Euismod Et PC</td>
		<td>Hay River</td>
		<td>Bahamas</td>
		<td>87695</td>
	</tr>
</table>
```

![example](https://lucasaid.github.io/tablify/example.gif "example")
