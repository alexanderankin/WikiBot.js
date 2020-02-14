# WikiBot.js

Port of pywikibot, heavily inspired.

## Differences

Instead of using this tool as a script, it is intended to be used either as a
`require`-able package or a globally available command in the `PATH`. Instead
of needing to running a `generate_user_files` script, the equivalent is the
login command. To add a MediaWiki site thats not in the standard families, use
the `wikibot families` command.
