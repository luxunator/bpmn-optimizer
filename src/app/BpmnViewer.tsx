'use client'

import React, { useEffect, useRef } from 'react';
import { BpmnVisualization } from 'bpmn-visualization';
import { complexBpmnXml }  from './bpmn';

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
    }
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '600px' }} / >;
};

export default BpmnViewer;
