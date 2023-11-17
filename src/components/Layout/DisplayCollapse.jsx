import React from 'react'
import Collapse from './Collapse'
import DataCollapse from '../../data/dataCollapse.json'

export default function DisplayCollapse() {
  return (
    <section className="collapse-section">
        <Collapse 
          data={DataCollapse}
        />
    </section>
  )
}