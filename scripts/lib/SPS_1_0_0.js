var SPS_1_0_0_Module_Factory = function () {
  var SPS_1_0_0 = {
    n: 'SPS_1_0_0',
    dens: 'http:\/\/www.opengis.net\/sps\/1.0',
    deps: ['SWE_1_0_0', 'GML_3_1_1', 'OWS_1_0_0'],
    tis: [{
        ln: 'SPSMessage.SubmitResponse.Alternative',
        tn: null,
        ps: [{
            n: 'inputParameter',
            rq: true,
            col: true,
            en: 'InputParameter',
            ti: '.InputParameterType'
          }]
      }, {
        ln: 'CancelRequestType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'taskID',
            rq: true,
            ti: 'Token'
          }]
      }, {
        ln: 'ParametersType',
        tn: 'parametersType',
        ps: [{
            n: 'inputParameter',
            rq: true,
            col: true,
            en: 'InputParameter',
            ti: '.InputParameterType'
          }]
      }, {
        ln: 'DescribeResultAccessRequestResponse.Service',
        tn: null,
        ps: [{
            n: 'serviceType',
            rq: true,
            en: 'ServiceType'
          }, {
            n: 'serviceURL',
            rq: true,
            en: 'ServiceURL'
          }, {
            n: 'request',
            ti: '.DescribeResultAccessRequestResponse.Service.Request'
          }]
      }, {
        ln: 'GetFeasibilityRequestResponse',
        tn: null,
        ps: [{
            n: 'feasibilityID',
            rq: true
          }, {
            n: 'feasibility',
            rq: true
          }, {
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }, {
            n: 'latestResponseTime',
            rq: true,
            en: 'LatestResponseTime',
            ti: '.LatestResponseTime'
          }, {
            n: 'alternative',
            mno: 0,
            col: true,
            ti: '.GetFeasibilityRequestResponse.Alternative'
          }]
      }, {
        ln: 'AreaOfServiceType',
        ps: [{
            n: 'boundingBox',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'BoundingBox',
              ns: 'http:\/\/www.opengis.net\/ows'
            },
            ti: 'OWS_1_0_0.BoundingBoxType',
            t: 'er'
          }, {
            n: 'pos',
            rq: true,
            en: {
              lp: 'pos',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.DirectPositionType'
          }, {
            n: 'polygon',
            rq: true,
            en: {
              lp: 'Polygon',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.PolygonType'
          }, {
            n: 'solid',
            rq: true,
            en: {
              lp: 'Solid',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.SolidType'
          }]
      }, {
        ln: 'SPSMessage.UpdateRequest',
        tn: null,
        ps: [{
            n: 'inputDescriptor',
            rq: true,
            col: true,
            en: 'InputDescriptor',
            ti: '.InputDescriptor'
          }]
      }, {
        ln: 'SubmitRequestResponse',
        tn: null,
        ps: [{
            n: 'taskID',
            rq: true,
            ti: 'Token'
          }, {
            n: 'status',
            rq: true
          }, {
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }, {
            n: 'latestResponseTime',
            rq: true,
            en: 'LatestResponseTime',
            ti: '.LatestResponseTime'
          }, {
            n: 'estimatedToC',
            ti: '.EstimatedToC'
          }, {
            n: 'alternative',
            mno: 0,
            col: true,
            ti: '.SubmitRequestResponse.Alternative'
          }]
      }, {
        ln: 'GetStatusRequestResponse',
        tn: null,
        ps: [{
            n: 'taskID',
            rq: true,
            ti: 'Token'
          }, {
            n: 'status',
            rq: true
          }, {
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }, {
            n: 'estimatedToC',
            ti: '.EstimatedToC'
          }]
      }, {
        ln: 'SPSMessage.FeasibilityResponse',
        tn: null,
        ps: [{
            n: 'feasibility',
            rq: true
          }, {
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }, {
            n: 'alternative',
            ti: '.SPSMessage.FeasibilityResponse.Alternative'
          }]
      }, {
        ln: 'DescribeResultAccessRequestResponse',
        tn: null,
        ps: [{
            n: 'service',
            rq: true,
            col: true,
            ti: '.DescribeResultAccessRequestResponse.Service'
          }, {
            n: 'dataNotAvailable',
            rq: true,
            en: 'DataNotAvailable',
            ti: '.DescribeResultAccessRequestResponse.DataNotAvailable'
          }]
      }, {
        ln: 'SubmitRequestType.SensorParam',
        tn: null,
        ps: [{
            n: 'sensorID',
            rq: true,
            ti: '.SensorIDType'
          }, {
            n: 'parameters',
            rq: true,
            ti: '.ParametersType'
          }]
      }, {
        ln: 'RequestBaseType',
        ps: [{
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'GetStatusRequestType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'notificationTarget',
            ti: '.NotificationTargetType'
          }, {
            n: 'taskID',
            rq: true,
            ti: 'Token'
          }]
      }, {
        ln: 'SPSMessage.SubmitResponse',
        tn: null,
        ps: [{
            n: 'status',
            rq: true
          }, {
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }, {
            n: 'estimatedToC',
            ti: '.EstimatedToC'
          }, {
            n: 'alternative',
            ti: '.SPSMessage.SubmitResponse.Alternative'
          }]
      }, {
        ln: 'SPSContentsType.SensorOfferingList',
        tn: null,
        ps: [{
            n: 'sensorOffering',
            rq: true,
            col: true,
            en: 'SensorOffering',
            ti: '.SensorOfferingType'
          }]
      }, {
        ln: 'SPSMessage.FeasibilityResponse.Alternative',
        tn: null,
        ps: [{
            n: 'inputParameter',
            rq: true,
            col: true,
            en: 'InputParameter',
            ti: '.InputParameterType'
          }]
      }, {
        ln: 'TaskMessageDefinitionType',
        bti: 'GML_3_1_1.DefinitionType',
        ps: [{
            n: 'externalDefinition'
          }, {
            n: 'type'
          }, {
            n: 'length',
            ti: 'AnyType'
          }, {
            n: 'min',
            ti: 'AnyType'
          }, {
            n: 'max',
            ti: 'AnyType'
          }, {
            n: 'structureSchema'
          }]
      }, {
        ln: 'SPSMessage.StatusInformation',
        tn: null,
        ps: [{
            n: 'status',
            rq: true
          }, {
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }, {
            n: 'estimatedToC',
            ti: '.EstimatedToC'
          }]
      }, {
        ln: 'EstimatedToC',
        tn: null,
        ps: [{
            n: 'timeInstant',
            rq: true,
            en: {
              lp: 'TimeInstant',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.TimeInstantType'
          }]
      }, {
        ln: 'DescribeResultAccessRequestResponse.DataNotAvailable',
        tn: null,
        ps: [{
            n: 'reason',
            rq: true
          }, {
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }]
      }, {
        ln: 'GetFeasibilityRequestType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'notificationTarget',
            rq: true,
            ti: '.NotificationTargetType'
          }, {
            n: 'sensorID',
            rq: true,
            ti: '.SensorIDType'
          }, {
            n: 'parameters',
            rq: true,
            ti: '.ParametersType'
          }, {
            n: 'timeFrame',
            ti: '.TimeFrame'
          }]
      }, {
        ln: 'SPSContentsType.PhenomenonOfferingList',
        tn: null,
        ps: [{
            n: 'phenomenonOffering',
            rq: true,
            col: true,
            en: 'PhenomenonOffering',
            ti: '.SPSContentsType.PhenomenonOfferingList.PhenomenonOffering'
          }]
      }, {
        ln: 'DescribeTaskingRequestType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'sensorID',
            rq: true,
            col: true,
            ti: '.SensorIDType'
          }]
      }, {
        ln: 'SubmitRequestResponse.Alternative',
        tn: null,
        ps: [{
            n: 'inputParameter',
            rq: true,
            col: true,
            en: 'InputParameter',
            ti: '.InputParameterType'
          }]
      }, {
        ln: 'DescribeTaskingRequestResponseType',
        ps: [{
            n: 'taskingDescriptor',
            rq: true,
            col: true,
            ti: '.DescribeTaskingRequestResponseType.TaskingDescriptor'
          }]
      }, {
        ln: 'InputDescriptorType.Restriction',
        tn: null,
        ps: [{
            n: 'inputParameter',
            rq: true,
            en: 'InputParameter',
            ti: '.InputParameterType'
          }]
      }, {
        ln: 'SPSContentsType',
        ps: [{
            n: 'sensorOfferingList',
            rq: true,
            en: 'SensorOfferingList',
            ti: '.SPSContentsType.SensorOfferingList'
          }, {
            n: 'phenomenonOfferingList',
            rq: true,
            en: 'PhenomenonOfferingList',
            ti: '.SPSContentsType.PhenomenonOfferingList'
          }]
      }, {
        ln: 'InputDescriptorType.Definition',
        tn: null,
        ps: [{
            n: 'commonData',
            rq: true,
            ti: '.InputDescriptorType.Definition.CommonData'
          }, {
            n: 'taskMessageDefinition',
            rq: true,
            en: 'TaskMessageDefinition'
          }, {
            n: 'geometryDefinition',
            rq: true,
            en: 'GeometryDefinition',
            ti: 'QName'
          }, {
            n: 'temporalDefinition',
            rq: true,
            en: 'TemporalDefinition',
            ti: 'QName'
          }]
      }, {
        ln: 'LatestResponseTime',
        tn: null,
        ps: [{
            n: 'timeInstant',
            rq: true,
            en: {
              lp: 'TimeInstant',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.TimeInstantType'
          }]
      }, {
        ln: 'InputParameterType.Value',
        tn: null,
        ps: [{
            n: 'any',
            rq: true,
            typed: false,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'NotificationTargetType',
        tn: 'notificationTargetType',
        ps: [{
            n: 'notificationID',
            rq: true,
            ti: 'Token'
          }, {
            n: 'notificationURL',
            rq: true
          }]
      }, {
        ln: 'GetCapabilities',
        tn: null,
        bti: 'OWS_1_0_0.GetCapabilitiesType',
        ps: [{
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'DescribeResultAccessRequestResponse.Service.Request',
        tn: null,
        ps: [{
            n: 'any',
            rq: true,
            dom: false,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'UpdateRequestType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'taskID',
            rq: true,
            ti: 'Token'
          }, {
            n: 'notificationTarget',
            ti: '.NotificationTargetType'
          }, {
            n: 'parameters',
            ti: '.ParametersType'
          }]
      }, {
        ln: 'GetFeasibilityRequestResponse.Alternative',
        tn: null,
        ps: [{
            n: 'inputParameter',
            rq: true,
            col: true,
            en: 'InputParameter',
            ti: '.InputParameterType'
          }]
      }, {
        ln: 'DescribeResultAccessRequestType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'taskID',
            rq: true,
            ti: 'Token'
          }, {
            n: 'sensorID',
            rq: true,
            ti: '.SensorIDType'
          }]
      }, {
        ln: 'SPSMessage.UpdateResponse',
        tn: null,
        ps: [{
            n: 'inputParameter',
            rq: true,
            col: true,
            en: 'InputParameter',
            ti: '.InputParameterType'
          }]
      }, {
        ln: 'SubmitRequestType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'notificationTarget',
            rq: true,
            ti: '.NotificationTargetType'
          }, {
            n: 'sensorParam',
            rq: true,
            ti: '.SubmitRequestType.SensorParam'
          }, {
            n: 'feasibilityID',
            rq: true
          }, {
            n: 'timeFrame',
            ti: '.TimeFrame'
          }]
      }, {
        ln: 'InputDescriptorType.Definition.CommonData',
        tn: null,
        ps: [{
            n: 'count',
            rq: true,
            en: {
              lp: 'Count',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.Count'
          }, {
            n: 'quantity',
            rq: true,
            en: {
              lp: 'Quantity',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.Quantity'
          }, {
            n: 'time',
            rq: true,
            en: {
              lp: 'Time',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.Time'
          }, {
            n: '_boolean',
            rq: true,
            en: {
              lp: 'Boolean',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.Boolean'
          }, {
            n: 'category',
            rq: true,
            en: {
              lp: 'Category',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.Category'
          }, {
            n: 'text',
            rq: true,
            en: {
              lp: 'Text',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.Text'
          }, {
            n: 'quantityRange',
            rq: true,
            en: {
              lp: 'QuantityRange',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.QuantityRange'
          }, {
            n: 'countRange',
            rq: true,
            en: {
              lp: 'CountRange',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.CountRange'
          }, {
            n: 'timeRange',
            rq: true,
            en: {
              lp: 'TimeRange',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.TimeRange'
          }, {
            n: 'abstractDataRecord',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'AbstractDataRecord',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.AbstractDataRecordType',
            t: 'er'
          }, {
            n: 'abstractDataArray',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'AbstractDataArray',
              ns: 'http:\/\/www.opengis.net\/swe\/1.0'
            },
            ti: 'SWE_1_0_0.AbstractDataArrayType',
            t: 'er'
          }]
      }, {
        ln: 'InputDescriptorType',
        ps: [{
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }, {
            n: 'definition',
            rq: true,
            ti: '.InputDescriptorType.Definition'
          }, {
            n: 'restriction',
            ti: '.InputDescriptorType.Restriction'
          }, {
            n: 'cardinality'
          }, {
            n: 'parameterID',
            rq: true,
            ti: 'ID',
            an: {
              lp: 'parameterID'
            },
            t: 'a'
          }, {
            n: 'use',
            rq: true,
            an: {
              lp: 'use'
            },
            t: 'a'
          }, {
            n: 'updateable',
            ti: 'Boolean',
            an: {
              lp: 'updateable'
            },
            t: 'a'
          }]
      }, {
        ln: 'UpdateRequestResponse.MissingParameters',
        tn: null,
        ps: [{
            n: 'inputDescriptor',
            rq: true,
            en: 'InputDescriptor',
            ti: '.InputDescriptor'
          }]
      }, {
        ln: 'SPSContentsType.PhenomenonOfferingList.PhenomenonOffering',
        tn: null,
        ps: [{
            n: 'phenomenon',
            rq: true,
            en: 'Phenomenon'
          }, {
            n: 'sensorID',
            rq: true,
            col: true,
            en: 'SensorID',
            ti: 'Token'
          }]
      }, {
        ln: 'TimeFrame',
        tn: null,
        ps: [{
            n: 'timeInstant',
            rq: true,
            en: {
              lp: 'TimeInstant',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.TimeInstantType'
          }]
      }, {
        ln: 'Capabilities',
        tn: null,
        bti: 'OWS_1_0_0.CapabilitiesBaseType',
        ps: [{
            n: 'contents',
            en: 'Contents',
            ti: '.SPSContentsType'
          }]
      }, {
        ln: 'InputParameterType',
        ps: [{
            n: 'value',
            rq: true,
            col: true,
            ti: '.InputParameterType.Value'
          }, {
            n: 'parameterID',
            rq: true,
            ti: 'ID',
            an: {
              lp: 'parameterID'
            },
            t: 'a'
          }]
      }, {
        ln: 'SensorOfferingType',
        ps: [{
            n: 'areaOfService',
            rq: true,
            en: 'AreaOfService',
            ti: '.AreaOfServiceType'
          }, {
            n: 'phenomenon',
            rq: true,
            en: 'Phenomenon'
          }, {
            n: 'sensorDefinition',
            rq: true,
            en: 'SensorDefinition'
          }, {
            n: 'sensorID',
            rq: true,
            en: 'SensorID',
            ti: 'Token'
          }]
      }, {
        ln: 'SensorIDType',
        tn: 'sensorIDType',
        ps: [{
            n: 'value',
            ti: 'Token',
            t: 'v'
          }]
      }, {
        ln: 'DescribeTaskingRequestResponseType.TaskingDescriptor',
        tn: null,
        ps: [{
            n: 'sensorID',
            rq: true,
            ti: '.SensorIDType'
          }, {
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }, {
            n: 'inputDescriptor',
            rq: true,
            col: true,
            en: 'InputDescriptor',
            ti: '.InputDescriptor'
          }]
      }, {
        ln: 'InputDescriptor',
        tn: null,
        bti: '.InputDescriptorType'
      }, {
        ln: 'SPSMessage',
        tn: null,
        ps: [{
            n: 'feasibilityResponse',
            rq: true,
            en: 'FeasibilityResponse',
            ti: '.SPSMessage.FeasibilityResponse'
          }, {
            n: 'submitResponse',
            rq: true,
            en: 'SubmitResponse',
            ti: '.SPSMessage.SubmitResponse'
          }, {
            n: 'statusInformation',
            rq: true,
            en: 'StatusInformation',
            ti: '.SPSMessage.StatusInformation'
          }, {
            n: 'updateRequest',
            rq: true,
            en: 'UpdateRequest',
            ti: '.SPSMessage.UpdateRequest'
          }, {
            n: 'updateResponse',
            rq: true,
            en: 'UpdateResponse',
            ti: '.SPSMessage.UpdateResponse'
          }, {
            n: 'spsCorrID',
            rq: true,
            ti: 'Token',
            an: {
              lp: 'SPSCorrID'
            },
            t: 'a'
          }]
      }, {
        ln: 'UpdateRequestResponse',
        tn: null,
        ps: [{
            n: 'taskID',
            rq: true,
            ti: 'Token'
          }, {
            n: 'status',
            rq: true
          }, {
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }, {
            n: 'estimatedToC',
            ti: '.UpdateRequestResponse.EstimatedToC'
          }, {
            n: 'missingParameters',
            mno: 0,
            col: true,
            ti: '.UpdateRequestResponse.MissingParameters'
          }]
      }, {
        ln: 'CancelRequestResponse',
        tn: null,
        ps: [{
            n: 'taskID',
            rq: true,
            ti: 'Token'
          }, {
            n: 'status',
            rq: true
          }, {
            n: 'description',
            en: {
              lp: 'description',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.StringOrRefType'
          }]
      }, {
        ln: 'UpdateRequestResponse.EstimatedToC',
        tn: null,
        ps: [{
            n: 'timeInstant',
            rq: true,
            en: {
              lp: 'TimeInstant',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.TimeInstantType'
          }]
      }],
    eis: [{
        en: 'estimatedToC',
        ti: '.EstimatedToC'
      }, {
        en: 'GetFeasibilityRequestResponse',
        ti: '.GetFeasibilityRequestResponse'
      }, {
        en: 'feasibilityID'
      }, {
        en: 'sensorID',
        ti: '.SensorIDType'
      }, {
        en: 'SPSMessage',
        ti: '.SPSMessage'
      }, {
        en: 'GetStatus',
        ti: '.GetStatusRequestType'
      }, {
        en: 'parameters',
        ti: '.ParametersType'
      }, {
        en: 'Cancel',
        ti: '.CancelRequestType'
      }, {
        en: 'DescribeResultAccessRequestResponse',
        ti: '.DescribeResultAccessRequestResponse'
      }, {
        en: 'DescribeTaskingRequestResponse',
        ti: '.DescribeTaskingRequestResponseType'
      }, {
        en: 'UpdateRequestResponse',
        ti: '.UpdateRequestResponse'
      }, {
        en: 'InputParameter',
        ti: '.InputParameterType'
      }, {
        en: 'Update',
        ti: '.UpdateRequestType'
      }, {
        en: 'TaskMessageDefinition',
        ti: '.TaskMessageDefinitionType',
        sh: {
          lp: 'Definition',
          ns: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        en: 'taskID',
        ti: 'Token'
      }, {
        en: 'DescribeTasking',
        ti: '.DescribeTaskingRequestType'
      }, {
        en: 'Capabilities',
        ti: '.Capabilities'
      }, {
        en: 'SubmitRequestResponse',
        ti: '.SubmitRequestResponse'
      }, {
        en: 'GetStatusRequestResponse',
        ti: '.GetStatusRequestResponse'
      }, {
        en: 'GetFeasibility',
        ti: '.GetFeasibilityRequestType'
      }, {
        en: 'timeFrame',
        ti: '.TimeFrame'
      }, {
        en: 'TaskMessageDictionary',
        ti: 'GML_3_1_1.DictionaryType'
      }, {
        en: 'LatestResponseTime',
        ti: '.LatestResponseTime'
      }, {
        en: 'InputDescriptor',
        ti: '.InputDescriptor'
      }, {
        en: 'Submit',
        ti: '.SubmitRequestType'
      }, {
        en: 'notificationTarget',
        ti: '.NotificationTargetType'
      }, {
        en: 'Contents',
        ti: '.SPSContentsType'
      }, {
        en: 'CancelRequestResponse',
        ti: '.CancelRequestResponse'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilities'
      }, {
        en: 'DescribeResultAccess',
        ti: '.DescribeResultAccessRequestType'
      }]
  };
  return {
    SPS_1_0_0: SPS_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SPS_1_0_0_Module_Factory);
}
else {
  var SPS_1_0_0_Module = SPS_1_0_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SPS_1_0_0 = SPS_1_0_0_Module.SPS_1_0_0;
  }
  else {
    var SPS_1_0_0 = SPS_1_0_0_Module.SPS_1_0_0;
  }
}