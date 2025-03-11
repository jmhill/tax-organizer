Just a little script for organizing my tax documents -

Expects to have the files dumped into the 'files' directory, and the files must be
in the following structure:

- `/files`
	- `/income`
		- `/{category}`
		  - `{file_name}`
	- `/expense`
		- `/{category}`

...idea being that the script will read the path to organize each file by
type (income or expense), category, and then all files should exist only in a category folder.

The script just dumps the csv output to the console, so can redirect to a file
easily in nushell by doing:

```
deno run --allow-read main.ts | example.csv
```
