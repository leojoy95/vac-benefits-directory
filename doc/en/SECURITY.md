## Security

#### Review software tools

Add any new tools any developers are using to
[CDS Developer Tools](https://docs.google.com/spreadsheets/d/1aKEk8P6qxNqc-DEgFtvHxkWORumEg00icqWjSZPTmlw)
and inform CDS Security.

#### Update packages

Our aim is to update all package dependencies once per sprint. Responsibility for this task is rotated through all the developers. We have come up with the following more or less sane workflow given the the Javascript ecosystem:

In a new branch

- [] Prune things no longer needed
- [] Run `yarn upgrade-interactive --latest --ignore-engines` to find upgraded packages
- [] Upgrade patch and minor version changes (green and yellow)
- [] Run tests
- [] Commit

For each red (major version) upgrade:

- [] Upgrade
- [] Run tests
- [] Examine app locally
- [] Commit
