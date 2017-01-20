# Tablify

Respond all the tables. Built for bad clients who want tables in their CMS

[Demo](https://lucasaid.github.io/tablify/build/)

Include in your code
* js/tablify-1.0.min.js
* css/tablify-1.0.min.css
* jQuery

### Basic HTML usage
```sh
<table>
	<tr>
		<th>First Name</th>
		<th>Last Name</th>
		<th>Phone</th>
		<th>Date</th>
		<th>Company</th>
		<th>City</th>
		<th>Country</th>
		<th>Postcode</th>
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

### Apply responsiveness to all tables
```sh
$('table').tablify();
```

### Or specific elements
```sh
$('.responsive-tables').tablify();
```

### Limit number of rows shown on smaller screens
```sh
$('table').tablify(10);
```


### Add `tablify-ignore` to table header columns to hide on small screens
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
</table>
```


### Example
![example](https://lucasaid.github.io/tablify/example.gif "example")
