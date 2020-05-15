#!/usr/bin/env node
import debug from 'segment-functions-debugger/out/cli/debug'
import protocol from 'segment-functions-debugger/out/cli/protocol'
import deploy from 'segment-functions-debugger/out/cli/deploy'
import proxy from 'segment-functions-debugger/out/cli/proxy'
import { onRequest } from './src_fn'
import { onAlias, onGroup, onIdentify, onPage, onScreen, onTrack } from './dest_fn'

let kind = process.argv[2]

if (!kind || kind == 'debug') {
  debug(onRequest, {
    onAlias,
    onIdentify,
    onPage,
    onScreen,
    onTrack,
    onGroup
  })
} else if (kind == 'protocol') {
  protocol()
} else if (kind == 'proxy') {
  proxy()
} else if (kind == 'deploy') {
  deploy()
}