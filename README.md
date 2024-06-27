# Learn You Node - version JS

To test each script:

* Make sure learnyounode is installed on your device:

  ```
  npm install -g learnyounode
  ```
* Run verify individually on each script:

  ```
  learnyounode verify <program.js>
  ```

This was added to package.json as "test", but does not seem to properly work on the remote server. Each script was tested locally with the learnyounode tests.

```
"scripts": {
    "test": "learnyounode verify"
  },
```
