# MMM-display-text-file

Display Text File Module for MagicMirror<sup>2</sup>


## Installation

1. Clone this repo into `~/MagicMirror/modules` directory.
2. Configure your `~/MagicMirror/config/config.js`:

    ```
    {
        module: 'MMM-display-text-file',
        position: 'bottom_right',
        config: {
            filename: '/tmp/test.txt'
        }
    }
    ```


## Config Options

| **Option**       | **Default**     | **Description**                                            |
| ---------------- | --------------- | ---------------------------------------------------------- |
| `filename`       | '/tmp/test.txt' | addresses to ping                                          |
| `updateInterval` | 5               | how often the module should ping the hosts in minutes      |
| `font`           | 'medium'        | font size 'xsmall', 'small', 'medium', 'large' or 'xlarge' |
