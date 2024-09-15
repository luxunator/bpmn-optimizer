const bpmnXml = `
	<?xml version="1.0" encoding="UTF-8"?>
	<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
					  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
					  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
					  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
					  xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd"
					  id="sample-diagram"
					  targetNamespace="http://bpmn.io/schema/bpmn">

	  <bpmn:process id="Process_1" isExecutable="false">
		<bpmn:startEvent id="StartEvent_1" name="Start">
		  <bpmn:outgoing>Flow_1</bpmn:outgoing>
		</bpmn:startEvent>

		<bpmn:task id="Task_1" name="Task 1">
		  <bpmn:incoming>Flow_1</bpmn:incoming>
		  <bpmn:outgoing>Flow_2</bpmn:outgoing>
		</bpmn:task>

		<bpmn:task id="Task_2" name="Task 2">
		  <bpmn:incoming>Flow_2</bpmn:incoming>
		  <bpmn:outgoing>Flow_3</bpmn:outgoing>
		</bpmn:task>

		<bpmn:endEvent id="EndEvent_1" name="End">
		  <bpmn:incoming>Flow_3</bpmn:incoming>
		</bpmn:endEvent>

		<bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="Task_1"/>
		<bpmn:sequenceFlow id="Flow_2" sourceRef="Task_1" targetRef="Task_2"/>
		<bpmn:sequenceFlow id="Flow_3" sourceRef="Task_2" targetRef="EndEvent_1"/>
	  </bpmn:process>

	  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
		<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
		  <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
			<dc:Bounds x="150" y="100" width="36" height="36"/>
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Task_1_di" bpmnElement="Task_1">
			<dc:Bounds x="240" y="90" width="100" height="80"/>
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Task_2_di" bpmnElement="Task_2">
			<dc:Bounds x="400" y="90" width="100" height="80"/>
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="EndEvent_1_di" bpmnElement="EndEvent_1">
			<dc:Bounds x="550" y="100" width="36" height="36"/>
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNEdge id="Flow_1_di" bpmnElement="Flow_1">
			<di:waypoint x="186" y="118"/>
			<di:waypoint x="240" y="118"/>
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_2_di" bpmnElement="Flow_2">
			<di:waypoint x="340" y="118"/>
			<di:waypoint x="400" y="118"/>
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_3_di" bpmnElement="Flow_3">
			<di:waypoint x="500" y="118"/>
			<di:waypoint x="550" y="118"/>
		  </bpmndi:BPMNEdge>
		</bpmndi:BPMNPlane>
	  </bpmndi:BPMNDiagram>
	</bpmn:definitions>
`;

const complexBpmnXml = `
	<?xml version="1.0" encoding="UTF-8"?>
	<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="17.7.1">
	  <process id="Process_1" isExecutable="false">
		<startEvent id="Event_13r4ohm">
		  <outgoing>Flow_1b7ats9</outgoing>
		  <outgoing>Flow_196pn7t</outgoing>
		  <outgoing>Flow_0zokf9j</outgoing>
		</startEvent>
		<task id="Activity_1abcllj">
		  <incoming>Flow_196pn7t</incoming>
		  <incoming>Flow_0nam4h1</incoming>
		  <outgoing>Flow_1k5f023</outgoing>
		</task>
		<task id="Activity_1bwcwia">
		  <incoming>Flow_1b7ats9</incoming>
		  <incoming>Flow_101jb9v</incoming>
		  <outgoing>Flow_071237r</outgoing>
		</task>
		<sequenceFlow id="Flow_1b7ats9" sourceRef="Event_13r4ohm" targetRef="Activity_1bwcwia" />
		<sequenceFlow id="Flow_196pn7t" sourceRef="Event_13r4ohm" targetRef="Activity_1abcllj" />
		<task id="Activity_1kh4acj">
		  <incoming>Flow_0zokf9j</incoming>
		  <outgoing>Flow_0c57ok6</outgoing>
		</task>
		<sequenceFlow id="Flow_0zokf9j" sourceRef="Event_13r4ohm" targetRef="Activity_1kh4acj" />
		<task id="Activity_1hu3l68">
		  <incoming>Flow_1k5f023</incoming>
		  <incoming>Flow_071237r</incoming>
		  <outgoing>Flow_0rhde57</outgoing>
		  <outgoing>Flow_1n4rek1</outgoing>
		  <outgoing>Flow_1ewyo63</outgoing>
		</task>
		<sequenceFlow id="Flow_1k5f023" sourceRef="Activity_1abcllj" targetRef="Activity_1hu3l68" />
		<sequenceFlow id="Flow_071237r" sourceRef="Activity_1bwcwia" targetRef="Activity_1hu3l68" />
		<task id="Activity_1e98iu8">
		  <incoming>Flow_0rhde57</incoming>
		  <outgoing>Flow_1shomon</outgoing>
		  <outgoing>Flow_011e34h</outgoing>
		</task>
		<sequenceFlow id="Flow_0rhde57" sourceRef="Activity_1hu3l68" targetRef="Activity_1e98iu8" />
		<task id="Activity_02jddl7">
		  <incoming>Flow_011e34h</incoming>
		  <incoming>Flow_1ewyo63</incoming>
		  <outgoing>Flow_0nam4h1</outgoing>
		  <outgoing>Flow_0jpvupz</outgoing>
		</task>
		<task id="Activity_0ibs482">
		  <incoming>Flow_1shomon</incoming>
		  <incoming>Flow_1n4rek1</incoming>
		  <outgoing>Flow_101jb9v</outgoing>
		  <outgoing>Flow_1qkvlue</outgoing>
		</task>
		<sequenceFlow id="Flow_1shomon" sourceRef="Activity_1e98iu8" targetRef="Activity_0ibs482" />
		<sequenceFlow id="Flow_011e34h" sourceRef="Activity_1e98iu8" targetRef="Activity_02jddl7" />
		<sequenceFlow id="Flow_1n4rek1" sourceRef="Activity_1hu3l68" targetRef="Activity_0ibs482" />
		<sequenceFlow id="Flow_1ewyo63" sourceRef="Activity_1hu3l68" targetRef="Activity_02jddl7" />
		<sequenceFlow id="Flow_101jb9v" sourceRef="Activity_0ibs482" targetRef="Activity_1bwcwia" />
		<sequenceFlow id="Flow_0nam4h1" sourceRef="Activity_02jddl7" targetRef="Activity_1abcllj" />
		<task id="Activity_01czgbn">
		  <incoming>Flow_0jpvupz</incoming>
		  <incoming>Flow_1qkvlue</incoming>
		  <outgoing>Flow_1cd34e6</outgoing>
		</task>
		<sequenceFlow id="Flow_0jpvupz" sourceRef="Activity_02jddl7" targetRef="Activity_01czgbn" />
		<sequenceFlow id="Flow_1qkvlue" sourceRef="Activity_0ibs482" targetRef="Activity_01czgbn" />
		<task id="Activity_1po2o32">
		  <incoming>Flow_0c57ok6</incoming>
		  <outgoing>Flow_0h9o62n</outgoing>
		</task>
		<sequenceFlow id="Flow_0c57ok6" sourceRef="Activity_1kh4acj" targetRef="Activity_1po2o32" />
		<startEvent id="Event_0g2hncq">
		  <outgoing>Flow_1oqtekn</outgoing>
		</startEvent>
		<endEvent id="Event_0ki0gxd">
		  <incoming>Flow_0h9o62n</incoming>
		  <incoming>Flow_1cd34e6</incoming>
		  <incoming>Flow_1oqtekn</incoming>
		</endEvent>
		<sequenceFlow id="Flow_0h9o62n" sourceRef="Activity_1po2o32" targetRef="Event_0ki0gxd" />
		<sequenceFlow id="Flow_1cd34e6" sourceRef="Activity_01czgbn" targetRef="Event_0ki0gxd" />
		<sequenceFlow id="Flow_1oqtekn" sourceRef="Event_0g2hncq" targetRef="Event_0ki0gxd" />
	  </process>
	  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
		<bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
		  <bpmndi:BPMNShape id="Event_13r4ohm_di" bpmnElement="Event_13r4ohm">
			<omgdc:Bounds x="152" y="362" width="36" height="36" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Activity_1abcllj_di" bpmnElement="Activity_1abcllj">
			<omgdc:Bounds x="270" y="190" width="100" height="80" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Activity_1bwcwia_di" bpmnElement="Activity_1bwcwia">
			<omgdc:Bounds x="270" y="480" width="100" height="80" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Activity_1hu3l68_di" bpmnElement="Activity_1hu3l68">
			<omgdc:Bounds x="500" y="330" width="100" height="80" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Activity_1e98iu8_di" bpmnElement="Activity_1e98iu8">
			<omgdc:Bounds x="720" y="330" width="100" height="80" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Activity_02jddl7_di" bpmnElement="Activity_02jddl7">
			<omgdc:Bounds x="940" y="190" width="100" height="80" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Activity_0ibs482_di" bpmnElement="Activity_0ibs482">
			<omgdc:Bounds x="940" y="480" width="100" height="80" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Activity_01czgbn_di" bpmnElement="Activity_01czgbn">
			<omgdc:Bounds x="1190" y="340" width="100" height="80" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Activity_1kh4acj_di" bpmnElement="Activity_1kh4acj">
			<omgdc:Bounds x="270" y="680" width="100" height="80" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Activity_1po2o32_di" bpmnElement="Activity_1po2o32">
			<omgdc:Bounds x="940" y="680" width="100" height="80" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Event_0g2hncq_di" bpmnElement="Event_0g2hncq">
			<omgdc:Bounds x="1222" y="82" width="36" height="36" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNShape id="Event_0ki0gxd_di" bpmnElement="Event_0ki0gxd">
			<omgdc:Bounds x="1512" y="362" width="36" height="36" />
		  </bpmndi:BPMNShape>
		  <bpmndi:BPMNEdge id="Flow_1b7ats9_di" bpmnElement="Flow_1b7ats9">
			<omgdi:waypoint x="188" y="380" />
			<omgdi:waypoint x="229" y="380" />
			<omgdi:waypoint x="229" y="520" />
			<omgdi:waypoint x="270" y="520" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_196pn7t_di" bpmnElement="Flow_196pn7t">
			<omgdi:waypoint x="188" y="380" />
			<omgdi:waypoint x="229" y="380" />
			<omgdi:waypoint x="229" y="230" />
			<omgdi:waypoint x="270" y="230" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_0zokf9j_di" bpmnElement="Flow_0zokf9j">
			<omgdi:waypoint x="188" y="380" />
			<omgdi:waypoint x="210" y="380" />
			<omgdi:waypoint x="210" y="720" />
			<omgdi:waypoint x="270" y="720" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_0nam4h1_di" bpmnElement="Flow_0nam4h1">
			<omgdi:waypoint x="940" y="210" />
			<omgdi:waypoint x="370" y="210" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_1k5f023_di" bpmnElement="Flow_1k5f023">
			<omgdi:waypoint x="370" y="230" />
			<omgdi:waypoint x="435" y="230" />
			<omgdi:waypoint x="435" y="370" />
			<omgdi:waypoint x="500" y="370" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_101jb9v_di" bpmnElement="Flow_101jb9v">
			<omgdi:waypoint x="940" y="540" />
			<omgdi:waypoint x="370" y="540" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_071237r_di" bpmnElement="Flow_071237r">
			<omgdi:waypoint x="370" y="520" />
			<omgdi:waypoint x="435" y="520" />
			<omgdi:waypoint x="435" y="370" />
			<omgdi:waypoint x="500" y="370" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_0rhde57_di" bpmnElement="Flow_0rhde57">
			<omgdi:waypoint x="600" y="370" />
			<omgdi:waypoint x="720" y="370" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_1n4rek1_di" bpmnElement="Flow_1n4rek1">
			<omgdi:waypoint x="585" y="410" />
			<omgdi:waypoint x="680" y="520" />
			<omgdi:waypoint x="940" y="520" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_1ewyo63_di" bpmnElement="Flow_1ewyo63">
			<omgdi:waypoint x="587" y="330" />
			<omgdi:waypoint x="680" y="230" />
			<omgdi:waypoint x="940" y="230" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_1shomon_di" bpmnElement="Flow_1shomon">
			<omgdi:waypoint x="820" y="370" />
			<omgdi:waypoint x="880" y="370" />
			<omgdi:waypoint x="880" y="520" />
			<omgdi:waypoint x="940" y="520" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_011e34h_di" bpmnElement="Flow_011e34h">
			<omgdi:waypoint x="820" y="370" />
			<omgdi:waypoint x="880" y="370" />
			<omgdi:waypoint x="880" y="230" />
			<omgdi:waypoint x="940" y="230" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_0jpvupz_di" bpmnElement="Flow_0jpvupz">
			<omgdi:waypoint x="1040" y="230" />
			<omgdi:waypoint x="1115" y="230" />
			<omgdi:waypoint x="1115" y="380" />
			<omgdi:waypoint x="1190" y="380" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_1qkvlue_di" bpmnElement="Flow_1qkvlue">
			<omgdi:waypoint x="1040" y="520" />
			<omgdi:waypoint x="1115" y="520" />
			<omgdi:waypoint x="1115" y="380" />
			<omgdi:waypoint x="1190" y="380" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_0c57ok6_di" bpmnElement="Flow_0c57ok6">
			<omgdi:waypoint x="370" y="720" />
			<omgdi:waypoint x="940" y="720" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_0h9o62n_di" bpmnElement="Flow_0h9o62n">
			<omgdi:waypoint x="1040" y="720" />
			<omgdi:waypoint x="1276" y="720" />
			<omgdi:waypoint x="1519" y="394" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_1cd34e6_di" bpmnElement="Flow_1cd34e6">
			<omgdi:waypoint x="1290" y="380" />
			<omgdi:waypoint x="1512" y="380" />
		  </bpmndi:BPMNEdge>
		  <bpmndi:BPMNEdge id="Flow_1oqtekn_di" bpmnElement="Flow_1oqtekn">
			<omgdi:waypoint x="1258" y="100" />
			<omgdi:waypoint x="1385" y="100" />
			<omgdi:waypoint x="1480" y="270" />
			<omgdi:waypoint x="1523" y="364" />
		  </bpmndi:BPMNEdge>
		</bpmndi:BPMNPlane>
	  </bpmndi:BPMNDiagram>
	</definitions>
`;

export {bpmnXml, complexBpmnXml};

