'use client'

import React, { useEffect, useRef } from 'react';
import { BpmnVisualization } from 'bpmn-visualization';
import { complexBpmnXml }  from './bpmn';
import CycleBreak from './CycleBreak';

const BpmnViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initialize BPMN visualization
      const bpmnVisualization = new BpmnVisualization({
        container: containerRef.current,
      });

      // Render the BPMN diagram
      bpmnVisualization.load(complexBpmnXml);

	  CycleBreak(bpmnVisualization.graph);

	  bpmnVisualization.graph.refresh();
    }
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '600px' }} / >;
};

export default BpmnViewer;
