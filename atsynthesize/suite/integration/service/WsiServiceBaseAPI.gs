//
//  WsiServiceBaseAPI.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//

package atsynthesize.suite.integration.service


uses java.lang.System
uses java.lang.Throwable

uses gw.api.util.Logger
uses gw.api.webservice.exception.BadIdentifierException
uses gw.api.webservice.exception.FieldFormatException
uses gw.api.webservice.exception.SOAPException
uses gw.util.ILogger
uses gw.xml.IXmlMixedContent

uses atsynthesize.suite.integration.service.exception.InvalidFieldsException


class WsiServiceBaseAPI {

/**
 * Logger for each Service EndPoint 
 */
  protected var _logger : ILogger = null

/**
 * Name of the WebService - Used to identify/setup the logger for the destination
 * May have a matching entry in logging config - logging.properties
 * If there is no matching entry in the logging config the base Integration
 * logging configuration is inherited thanks to log4j
 */
  protected var _webServiceName : String = null


  /**
   * Constructor - Uses the webService name to construct the logger for the WebService
   * plugin. 
   * 
   * @param pWebServiceName - Name of the WebService, Used to identify.set up the
   *   logger for the destination. Should have a matching entry in the logging config
   * file - logging.properties
   */  
  construct(pWebServiceName : String) {
    _webServiceName = pWebServiceName
    //_logger = LoggerFactory.getLogger(LoggerCategory.API, _webServiceName)
    _logger = Logger.forCategory("Integration.${_webServiceName}")
  }


  /**
   * Executes a WSI service call. This method handles services that takes
   * in an input of type GOSU entity (WsiExportable/GX Model/GOSU XSD Schema Entity
   * and returns a GOSU entity to the calling WSI Service Client. 
   * 
   * @param pExecuteBlock - Block that is invoked to process the service call
   * @param pInput - Input Parameter - typically to the web service. This is 
   * can be one of GOSU WsiExportable(Should extend IWsiServiceEntity)/
   * GX Model/GOSU XSD Schema Entity.
   * 
   * @return GOSU WsiExportable/GX Model/GOSU XSD Schema Entity - Returned back
   * to the calling WSI Service Client
   * 
   * See {@link POGOExampleAPI, GXModelExampleAPI or GXModelExampleAPI for usage}. 
   */  
  @Throws(FieldFormatException, "Input Parameter passed is was null")
  @Throws(BadIdentifierException, "Identifier passed in is not found/incorrect")
  @Throws(SOAPException, "SOAP Exceptions includes Expected And Unexpected Exceptions")
  protected function wsiExecute<K extends IXmlMixedContent, 
                                V extends IXmlMixedContent> 
                                (
                                  pExecuteBlock(pBlockInput : K) : V,
                                  pInput : K
                                ) : V {
    var theServiceExecutor : WsiServiceExecutor<K,V> = new WsiServiceExecutor<K,V>
                                                             (
                                                               pExecuteBlock,
                                                               pInput,
                                                               _logger
                                                              )
    internalWsiExecute(theServiceExecutor)
    return theServiceExecutor.Output.Parameter
  }
  
  /**
   * Executes a WSI service call. This method handles services that takes
   * in an input of type GOSU entity <bold> Array </bold> (WsiExportable/GX Model
   * /GOSU XSD Schema Entity and returns a GOSU entity to the calling WSI Service 
   * Client. 
   * 
   * @param pExecuteBlock - Block that is invoked to process the service call
   * @param pInput - Input Parameter - typically to the web service. This is 
   * can be one of GOSU WsiExportable(Should extend IWsiServiceEntity)/
   * GX Model/GOSU XSD Schema Entity.
   * 
   * @return GOSU WsiExportable/GX Model/GOSU XSD Schema Entity - Returned back
   * to the calling WSI Service Client
   * 
   * See {@link POGOExampleAPI, GXModelExampleAPI or GXModelExampleAPI for usage}. 
   */  
  @Throws(FieldFormatException, "Input Parameter passed is was null")
  @Throws(BadIdentifierException, "Identifier passed in is not found/incorrect")
  @Throws(SOAPException, "SOAP Exceptions includes Expected And Unexpected Exceptions")
  protected function wsiExecute<K extends IXmlMixedContent, 
                                V extends IXmlMixedContent> 
                                (
                                  pExecuteBlock(pBlockInput : K[]) : V,
                                  pInput : K[]
                                ) : V {
    var theServiceExecutor : WsiServiceExecutor<K,V> = new WsiServiceExecutor<K,V>
                                                             (
                                                               pExecuteBlock,
                                                               pInput,
                                                               _logger
                                                             )
    internalWsiExecute(theServiceExecutor)
    return theServiceExecutor.Output.Parameter
  }
  
  /**
   * Executes a WSI service call. This method handles services that takes
   * in an input of type GOSU entity  (WsiExportable/GX Model
   * /GOSU XSD Schema Entity and returns a GOSU entity to the calling WSI Service 
   * Client. 
   * 
   * @param pExecuteBlock - Block that is invoked to process the service call
   * @param pInput - Input Parameter - typically to the web service. This is 
   * can be one of GOSU WsiExportable(Should extend IWsiServiceEntity)/
   * GX Model/GOSU XSD Schema Entity.
   * 
   * @return <bold> Array </bold> of GOSU WsiExportable/GX Model/GOSU XSD Schema 
   * Entity - Returned back to the calling WSI Service Client 
   * 
   * See {@link POGOExampleAPI, GXModelExampleAPI or GXModelExampleAPI for usage}. 
   */  
  @Throws(FieldFormatException, "Input Parameter passed is was null")
  @Throws(BadIdentifierException, "Identifier passed in is not found/incorrect")
  @Throws(SOAPException, "SOAP Exceptions includes Expected And Unexpected Exceptions")
  protected function wsiExecuteAndReturnArray<K extends IXmlMixedContent, 
                                              V extends IXmlMixedContent> 
                                              (
                                                pExecuteBlock(pBlockInput : K) : V[],
                                                pInput : K
                                              ) : V[] {
    var theServiceExecutor : WsiServiceExecutor<K,V> = new WsiServiceExecutor<K,V>
                                                             (
                                                               pExecuteBlock,
                                                               pInput,
                                                               true,
                                                               _logger
                                                             )
    internalWsiExecute(theServiceExecutor)
    return theServiceExecutor.Output.ArrayParameter
  }
  
  /**
   * Executes a WSI service call. This method handles services that takes
   * in an input of type GOSU entity <bold> Array </bold> (WsiExportable/GX Model
   * /GOSU XSD Schema Entity and returns a GOSU entity to the calling WSI Service 
   * Client. 
   * 
   * @param pExecuteBlock - Block that is invoked to process the service call
   * @param pInput - Input Parameter - typically to the web service. This is 
   * can be one of GOSU WsiExportable(Should extend IWsiServiceEntity)/
   * GX Model/GOSU XSD Schema Entity.
   * 
   * @return <bold> Array </bold> of GOSU WsiExportable/GX Model/GOSU XSD Schema 
   * Entity - Returned back to the calling WSI Service Client 
   * 
   * See {@link POGOExampleAPI, GXModelExampleAPI or GXModelExampleAPI for usage}. 
   */  
  @Throws(FieldFormatException, "Input Parameter passed is was null")
  @Throws(BadIdentifierException, "Identifier passed in is not found/incorrect")
  @Throws(SOAPException, "SOAP Exceptions includes Expected And Unexpected Exceptions")
  protected function wsiExecuteAndReturnArray<K extends IXmlMixedContent, 
                                              V extends IXmlMixedContent> 
                                              (
                                                pExecuteBlock(pBlockInput : K[]) : V[],
                                                pInput : K[]
                                              ) : V[] {
    var theServiceExecutor : WsiServiceExecutor<K,V> = new WsiServiceExecutor<K,V>
                                                             (
                                                               pExecuteBlock,
                                                               pInput,
                                                               true,
                                                               _logger
                                                             )
    internalWsiExecute(theServiceExecutor)
    return theServiceExecutor.Output.ArrayParameter
  }
  
                                  
  /**
   * Process the Service Request Log Info/Handle Exceptions. The method uses
   * WsiServiceExecutor to process the service request.
   * 
   * @param pWsiServiceExecutor - Service Executor that invokes the block that will
   * service the WS-I Service Request
   */  
  protected function internalWsiExecute(pWsiServiceExecutor : WsiServiceExecutor) {
    var exception : Throwable = null

    var startTime : long = 0
    if (_logger.InfoEnabled) {
      startTime = System.currentTimeMillis()
    } // if (_logger.InfoEnabled)

    try {
         //Mechanism to validate input
         //if (pWsiServiceExecutor.Input.isParameterNull()) {
         //  throw new FieldFormatException("Null Value passed in for the input Parameter")
         //}
        
        _logger.debug(\ -> "${Name}:internalWsiExecute() - Processing - ${pWsiServiceExecutor.Input.LongDescription}")
        pWsiServiceExecutor.execute()
        _logger.debug(\ -> "${Name}:internalWsiExecute() - Processed - ${pWsiServiceExecutor.Output.LongDescription}")
        
    } catch ( t : Throwable ) {
      exception = handleException(t, pWsiServiceExecutor)
    }

    if (_logger.InfoEnabled) {
      var endTime = System.currentTimeMillis()
      var timeInMs = (endTime-startTime)
      _logger.info("${Name}:internalExecute() - Time:[${timeInMs}] Processed Service - Success:[${exception==null}] - ${pWsiServiceExecutor.Input.shortDescription}")
    } // if (_logger.InfoEnabled)
    
    if (exception != null) {
      throw exception
    }
  }
  
  /**
   * handles exceptions raised during processing of the service request
   * WsiServiceExecutor to process the service request. The default behavior
   * logs the exception and throws a SOAP Exception that is returned back
   * to the calling service client as a SOAP Fault
   * 
   * @param pThrowable - Exception that was thrown during the service request
   * @param pWsiServiceExecutor - Service Executor that invokes the block that will
   * service the WS-I Service Request
   */  
  protected function handleException(pThrowable          : Throwable, 
                                     pWsiServiceExecutor : WsiServiceExecutor) 
                       : SOAPException {
    var theException : SOAPException = null
    var causeMsg : String = ""
    if (pThrowable.Cause != null) {
      causeMsg = "Cause:[${typeof(pThrowable.Cause)} - ${pThrowable.Cause.Message}]"
    }
    _logger.error("${Name}:internalWsiExecute() - ${typeof(pThrowable)} - input:[${pWsiServiceExecutor.Input.LongDescription}] ${causeMsg}", pThrowable)
    if (pThrowable typeis BadIdentifierException ||
        pThrowable typeis FieldFormatException ||
        pThrowable typeis InvalidFieldsException ||
        pThrowable typeis SOAPException) {
      theException = pThrowable as SOAPException
    } else {
      theException = new SOAPException ("UnexpectedException Processing Service Request - [Type:${pThrowable.Class.SimpleName} - [Message:${pThrowable.Message}] ${causeMsg}")
    }
    
    return theException
  }
  
  
  
  /**
   * Property returns displayable name of the web service
   * 
   */
  protected property get Name() : String {
    return "WsiServiceBaseAPI[${_webServiceName}]]"
  }
}
