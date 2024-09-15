import type { mxCell, mxGraph } from 'mxgraph';

const addedColor = '#0073e6';
const removedColor = '#c44601';

const addedArrowStyleMap = {
  'endArrow': 'blockThin',
  'strokeColor': addedColor,
};

const removedArrowStyleMap = {
  'endArrow': 'blockThin',
  'strokeColor': removedColor,
};

function CyleBreak(graph: mxGraph): void {
  const addedVertexStyleMap = Object.assign({}, graph.getStylesheet().getDefaultVertexStyle());
  addedVertexStyleMap.strokeColor = addedColor;

  graph.getStylesheet().styles.sequenceFlowAdded = addedArrowStyleMap;
  graph.getStylesheet().styles.sequenceFlowRemoved = removedArrowStyleMap;
  graph.getStylesheet().styles.vertexAdded = addedVertexStyleMap;

  const model = graph.getModel()
  const allVertices = model.filterDescendants((cell: mxCell) => { return cell.isVertex() }, model.getRoot());

  // add the sink vertices and their incoming edges
  let hasIncomingOnlyVertices = true;
  while (hasIncomingOnlyVertices) {
	const incomingOnlyVertices = allVertices.filter(cell => {
      const outgoingEdges = model.getOutgoingEdges(cell).filter(edge => !model.getStyle(edge)?.includes('sequenceFlowAdded'));
      const incomingEdges = model.getIncomingEdges(cell).filter(edge => !model.getStyle(edge)?.includes('sequenceFlowAdded'));

	  return outgoingEdges.length === 0 && incomingEdges.length > 0 && !model.getStyle(cell)?.includes('vertexAdded');
	});

	const incomingOnlyVerticesEdges = incomingOnlyVertices.map(cell => {
	  return model.getIncomingEdges(cell).filter(edge => !model.getStyle(edge)?.includes('sequenceFlowAdded'));
	});

	incomingOnlyVertices.forEach(cell => {
	  model.setStyle(cell, 'vertexAdded;' + model.getStyle(cell));
	});

	incomingOnlyVerticesEdges.forEach(edge => {
	  edge.forEach(cell => {
	    model.setStyle(cell, 'sequenceFlowAdded');
	  });
	});
 
	hasIncomingOnlyVertices = !(incomingOnlyVertices.length === 0 && incomingOnlyVerticesEdges.flat().length === 0);
  }

  // add the isolated vertices
  const isolatedVertices = allVertices.filter(cell => {
    const outgoingEdges = model.getOutgoingEdges(cell).filter(edge => !model.getStyle(edge)?.includes('sequenceFlowAdded'));
	const incomingEdges = model.getIncomingEdges(cell).filter(edge => !model.getStyle(edge)?.includes('sequenceFlowAdded'));

	return outgoingEdges.length === 0 && incomingEdges.length === 0 && !model.getStyle(cell)?.includes('vertexAdded');
  });

  isolatedVertices.forEach(cell => {
	model.setStyle(cell, 'vertexAdded;' + model.getStyle(cell));
  });

  // add the source vertices and their outgoing edges
  let hasOutgoingOnlyVertices = true;
  while (hasOutgoingOnlyVertices) {
	const outgoingOnlyVertices = allVertices.filter(cell => {
	  const outgoingEdges = model.getOutgoingEdges(cell).filter(edge => !model.getStyle(edge)?.includes('sequenceFlowAdded'));
	  const incomingEdges = model.getIncomingEdges(cell).filter(edge => !model.getStyle(edge)?.includes('sequenceFlowAdded'));

	  return outgoingEdges.length > 0 && incomingEdges.length === 0 && !model.getStyle(cell)?.includes('vertexAdded');
	});

	const outgoingOnlyVerticesEdges = outgoingOnlyVertices.map(cell => {
	  return model.getOutgoingEdges(cell).filter(edge => !model.getStyle(edge)?.includes('sequenceFlowAdded'));
	});

	outgoingOnlyVertices.forEach(cell => {
	  model.setStyle(cell, 'vertexAdded;' + model.getStyle(cell));
	});

	outgoingOnlyVerticesEdges.forEach(edge => {
	  edge.forEach(cell => {
		model.setStyle(cell, 'sequenceFlowAdded');
	  });
	});

	hasOutgoingOnlyVertices = !(outgoingOnlyVertices.length === 0 && outgoingOnlyVerticesEdges.flat().length === 0);
  }

  // add the vertex with the most outgoing edges and least incoming edges
  const vertices = allVertices.map(cell => {
	const outgoingEdges = model.getOutgoingEdges(cell).filter(edge => !model.getStyle(edge)?.includes('sequenceFlowAdded'));
	const incomingEdges = model.getIncomingEdges(cell).filter(edge => !model.getStyle(edge)?.includes('sequenceFlowAdded'));

	return { cell, outgoingEdges, incomingEdges };
  });

  const sortedVertices = vertices.sort((a, b) => {
	const aOutgoing = a.outgoingEdges.length;
	const aIncoming = a.incomingEdges.length;
	const bOutgoing = b.outgoingEdges.length;
	const bIncoming = b.incomingEdges.length;

	return (bOutgoing - bIncoming) - (aOutgoing - aIncoming);
  });

  if (sortedVertices.length > 0) {
	const vertex = sortedVertices[0];

	if (vertex) {
	  model.setStyle(vertex.cell, 'vertexAdded;' + model.getStyle(vertex.cell));

	  vertex.outgoingEdges.forEach(cell => {
		model.setStyle(cell, 'sequenceFlowAdded');
	  });

	  vertex.incomingEdges.forEach(cell => {
		model.setStyle(cell, 'sequenceFlowRemoved');
	  });
	}
  }
}

export default CyleBreak;
