// This is a component file. You can use this file to define a custom component for your project.
// This component will appear as a custom component in the editor.

import * as ecs from '@8thwall/ecs'  // This is how you access the ecs library.

ecs.registerComponent({
  name:"video",
  schema: {
    button: ecs.eid,
    video: ecs.eid,
  },
    stateMachine: ({world, eid, schemaAttribute}) => {
    const {button, video} = schemaAttribute.get(eid)
    
    ecs.defineState('default').initial().onEvent(ecs.input.UI_CLICK, () => {
        ecs.VideoControls.mutate(world, video, (controls) => {
          controls.paused = !controls.paused
          return false
        })
      })
  },
})
