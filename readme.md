# Usage

You'll need [Visual Studio Code](https://code.visualstudio.com/) to do your editing and debugging in.

First you'll need to install ```ngrok```:

```
brew cask install ngrok
```

Next check this repo out and use this as the basis for your functions project.

You'll need to configure the ```settings.env``` file. You'll need your JWT token (found by going to https://app.segment.com, and under cookies find the value for ```auth_token```).

For the ```SRC_FN_NAME``` and ```DEST_FN_NAME``` values these will be the names for your custom functions. These functions don't need to exist, but if they do be warned: They will be overwritten.

You can optionally also use a Tracking Plan to refine your types for populating/reading tracking, identify, or group events. To do so, you'll need to provide a workspace access token under the ```ACCESS_TOKEN``` property and also the name of the Tracking Plan under ```TP_NAME```

To actually pull in Tracking Plan, run

```
npm run protocol
```

This will update the ```src/protocol.d.ts``` file, so you may want to reset that if you later decide not to use Tracking Plans.

Next, put your functions code in either ```src/dest_fn.ts``` or ```src/src_fn.ts```.

When ready to begin debugging, first from the command-line, run:

```
npm run proxy
```

Wait until you see messages from the command saying:

```
Deployed source X
Deployed destination Y
```

That command will then continue to run in the back-ground (but can be quit once you've finished debugging. For future debuggin sessions, be sure to run this command again).

Now, from VSCode, go to your debug pane and press run. The debugger is now ready to receive input. You can set break-points in your functions code.

To activate the function call, go to your function in the Segment workspace, and edit the function and run it as you normally would to test. As each call is made it will trigger the local break-point for you to test.

Once you're happy the function is ready to go run:

```
npm run deploy
```
