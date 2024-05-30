[![build](https://github.com/opspec-pkgs/fs.stat/actions/workflows/build.yml/badge.svg)](https://github.com/opspec-pkgs/fs.stat/actions/workflows/build.yml)


# Problem statement

returns stats for a path

# Example usage

## Visualize

```shell
opctl ui github.com/opspec-pkgs/fs.stat#1.0.0
```

## Run

```
opctl run github.com/opspec-pkgs/fs.stat#1.0.0
```

## Compose

```yaml
op:
  ref: github.com/opspec-pkgs/fs.stat#1.0.0
  inputs:
    dir:  # 👈 required; provide a value
  ## uncomment to override defaults
  #   path: "/"
  outputs:
    stats:
```

# Support

join us on
[![Slack](https://img.shields.io/badge/slack-opctl-E01563.svg)](https://join.slack.com/t/opctl/shared_invite/zt-51zodvjn-Ul_UXfkhqYLWZPQTvNPp5w)
or
[open an issue](https://github.com/opspec-pkgs/fs.stat/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see
[project/CONTRIBUTING.md](https://github.com/opspec-pkgs/project/blob/main/CONTRIBUTING.md)
