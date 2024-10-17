# flotiq-api-ts

This package is a placeholder for FlotiqApi content generated with flotiq-codegen-ts generate command.
For more information check task #25472 description

To alter the effects of running npm install on this package modify the `postinstall` script in package.json:

* `"postinstall": "npx flotiq-codegen-ts generate"` - the package will attempt to generate FlotiqApi content, but it will send prompt asking for Flotiq api key. If the package was added to another project (with `npm install '<path to flotiq-api-ts>'`) the prompt **will not** show up, and the npm install process will be stuck.
* `"postinstall": "echo 'apikey' | npx flotiq-codegen-ts generate"` - the package will generate FlotiqApi for key provided in `apikey` argument for `echo` command
* `npx flotiq-codegen-ts generate"  < input-file.txt` - same as above, but the apikey will be taken from the first line of `input-file.txt` file
* `"postinstall": "npx flotiq-codegen-ts generate && mv flotiqApi/* ./"` - (can be combined with 2 above providing paikey) the content of generated FlotiqApi will be moved to parent folder, but the `package.json` file will be replaced potentially causing issues

The option of providing ApiKey from .env file instead of hardcoding it in postinstall script is yet to be worked out
