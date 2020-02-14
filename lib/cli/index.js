var fs = require('fs');
var path = require('path');

var commander = require('commander');
var yaml = require('yaml');

var package = require('../../package');

async function getOptions(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (e, args) => { resolve(yaml.parse(args)); });
  });
}

function addOptions(program, opts) {
  opts.forEach(({ short, long, description }) => {
    var programOption = [ [ short, long ].filter(e => !!e).join(', ') ];
    if (description) programOption.push(description);
    
    program.option(...programOption);
  });
}

async function main(argv = process.argv) {
  var program = new commander.Command();
  program.name('wikibot');
  program.version(package.version);

  var opts = await getOptions(path.join(__dirname, 'arguments.yml'));
  program.option('-v, --verbose', 'verbosity level', (d, v) => v + 1, 0);
  addOptions(program, opts);

  program.command('category', 'manage categories');

  if (argv.length === 2) {
    program.outputHelp();
    process.exit(0);
  }

  program.parse(argv);
  // console.log(program.opts());
}

module.exports = {
  main
};
