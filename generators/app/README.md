# {{.Values.moduleName | default "Your automation module name"}} Automation Scripts

Module for automation {{.Values.moduleName | default "Your automation module name"}}

## Prerrequisites

```
npm install -g webpack webpack-cli
```

Or

```
yarn add global webpack webpack-cli
```

## Compile 

One time compilation

```
webpack
```

Watch (file changes) compilation

```
webpack --watch
```
