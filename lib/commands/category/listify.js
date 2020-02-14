function main(command) {
  var {
    interactive
  } = command;

  console.log('category being run ' + (interactive ? '' : 'non-') + 'interactively');
}

module.exports = {
  main
};
