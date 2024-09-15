import type { mxCell, mxGraph } from 'mxgraph';

const addedColor = '#0073e6';

const addedArrowStyleMap = {
  'endArrow': 'blockThin',
  'strokeColor': addedColor,
};

function CyleBreak(graph: mxGraph): void {
  const addedVertexStyleMap = Object.assign({}, graph.getStylesheet().getDefaultVertexStyle());
  addedVertexStyleMap.strokeColor = addedColor;

  graph.getStylesheet().styles.sequenceFlowAdded = addedArrowStyleMap;
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
}

export default CyleBreak;
