import 'segment-typescript-definitions/common'
import 'segment-typescript-definitions/custom-destination'

export async function onTrack(event:SegmentProcessedEvent<SegmentTrackEvent>, settings: SegmentSettings) {
  let a = 0
  let e = event.event 
}

export async function onIdentify(event:SegmentProcessedEvent<SegmentIdentifyEvent>, settings: SegmentSettings) {
  
}

export async function onGroup(event:SegmentProcessedEvent<SegmentGroupEvent>, settings: SegmentSettings) {
  
}

export async function onPage(event:SegmentProcessedEvent<SegmentPageEvent>, settings: SegmentSettings) {
  
}

export async function onAlias(event:SegmentProcessedEvent<SegmentAliasEvent>, settings: SegmentSettings) {
  
}

export async function onScreen(event:SegmentProcessedEvent<SegmentScreenEvent>, settings: SegmentSettings) {
  
}