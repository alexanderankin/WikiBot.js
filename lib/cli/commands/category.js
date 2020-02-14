var commander = require('commander');

var { category } = require('../../commands');

async function main(argv = process.argv) {
  var program = new commander.Command();
  program.name('wikibot category');

  program
    .command('listify')
    .alias('ls')
    .option('-i, --interactive', 'ask for input on screen (default)', true)
    .option('--no-interactive', 'do not ask for input')
    .option('-c, --category <name>', 'Specify which category to list')
    .action(function (command) {
      category.listify.main(command);
    });

  if (argv.length === 2) {
    program.outputHelp();
    process.exit(0);
  }

  program.parse(argv);
}


if (require.main === module) {
  main(process.argv).then(() => {});
}

module.exports = {
  main
};
