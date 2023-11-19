import React from 'react'
import Collapse from '../../components/Layout/Collapse'
import DataCollapse from '../../data/dataCollapse.json'

export default function DisplayCollapse() {
    return (
        <section className="collapse-section">
            <div className="collapse-container">
                {DataCollapse.map(item => (
                    <Collapse
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    )
}