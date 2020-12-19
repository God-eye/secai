import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Events = () => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}> Fest   </h1>
<Timeline lineColor={'#013220'}>
  <TimelineItem
    key="001"
    dateText="Event1 "
     dateInnerStyle={{ background: '#013220' }}
  >
    <h3>Event 1</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
   
    </p>
        <button style={{backgroundColor:'#151719' ,color:'#fff', border:'1px'}}>Register Event</button>

  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="Event 2  "
     dateInnerStyle={{ background: '#013220' }}
  >
    <h3>Event 2</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
    
    </p>
        <button style={{backgroundColor:'#151719' ,color:'#fff', border:'1px'}}>Register Event</button>

  </TimelineItem><TimelineItem
    key="003"
    dateText="Event 3 "
     dateInnerStyle={{ background: '#013220' }}
  >
    <h3>Event 3</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
     
    </p>
           <button style={{backgroundColor:'#151719' ,color:'#fff', border:'1px'}}>Register Event</button>

  </TimelineItem><TimelineItem
    key="004"
    dateText="Event 4 "
     dateInnerStyle={{ background: '#013220' }}
  >
    <h3>Event 4</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
     
      est.
    </p>
          <button style={{backgroundColor:'#151719' ,color:'#fff', border:'1px'}}>Register Event</button>

  </TimelineItem>
 
</Timeline>

            
        </div>
    )
}


export default Events
