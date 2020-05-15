import 'segment-typescript-definitions/common'
import 'segment-typescript-definitions/custom-source'

export async function onRequest(request:SegmentSourceRequest, settings:SegmentSettings) {
  Segment.track({
    event:'Blog Viewed',
    properties: {
      blog_name: ''
    },
    userId: ''
  })
}