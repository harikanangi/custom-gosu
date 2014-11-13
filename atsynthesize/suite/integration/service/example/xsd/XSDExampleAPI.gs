//
//  XSDExampleAPI.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//

package atsynthesize.suite.integration.service.example.xsd


uses gw.api.server.AvailabilityLevel
uses gw.api.webservice.exception.BadIdentifierException
uses gw.api.webservice.exception.SOAPException
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiWebService

uses atsynthesize.suite.integration.service.WsiServiceBaseAPI

uses atsynthesize.suite.integration.service.example.xsd.xsdexample.InputParameter
uses atsynthesize.suite.integration.service.example.xsd.xsdexample.OutputParameter
uses atsynthesize.suite.integration.service.exception.InvalidFieldsException


@WsiWebService( "http://atsynthesize.com/gw/ws/atsynthesize/integration/service/example/xsd/XSDExampleAPI" )
@WsiAvailability(AvailabilityLevel.MULTIUSER)
class XSDExampleAPI
        extends WsiServiceBaseAPI {
  
  /**
   * Constructor - Invokes the super's constructor with XSDExampleAPI
   * as the name of the inbound integration. The log file for this will be
   * determined by the configuration of Integration.XSDExampleAPI or
   * Integration categories in logging.properties
   */  
  construct() {
    super("XSDExampleAPI")
  }
  
  /**
   * Example of an Inbound WS-I Web Service that takes in a single instance
   * of an XSD based class InputParameter (Defined in XSDExample.xsd) and returns 
   * an instance of the XSD based class OutputParameter. This method in turn calls 
   * the base class wsiExecute method and passes in a block that invokes the 
   * private method processExampleWsiService
   *  
   * @param pInput - InputParameter - XSD based class Instance that
   * contains mock values.
   * 
   * @return OutputParameter XSD based class instance - Returns back a mock instance of
   * OutputParameter
   * 
   * @Throws InvalidFieldsException
   * @Throws BadIdentifierException
   * @Throws SOAPException
   * 
   */  
  @Throws(InvalidFieldsException, "Invalid values passed in")
  @Throws(BadIdentifierException, "Identifier passed in is not found/incorrect")
  @Throws(SOAPException, "SOAP Exceptions includes Expected And Unexpected Exceptions")
  public function exampleWsiService(pInput : InputParameter) 
                    : OutputParameter {
    
    var result : OutputParameter = wsiExecute(
                                               \ requestInput : InputParameter -> { 
                                                 return  processExampleWsiService(requestInput)
                                               }, 
                                               pInput
                                             )
    return result
  }

  /**
   * Example of an Inbound WS-I Web Service that takes in multiple instances
   * of an XSD based class InputParameter (Defined in XSDExample.xsd) and returns 
   * an instance of the XSD based class OutputParameter. This method in turn calls 
   * the base class wsiExecute method and passes in a block that invokes the 
   * private method processExampleWsiServiceArrayInput
   *  
   * @param pInput - InputParameter[] - Array of XSD based class 
   * Instances that contains mock values.
   * 
   * @return OutputParameter XSD based class instance - Returns back a mock instance of
   * OutputParameter
   * 
   * @Throws InvalidFieldsException
   * @Throws BadIdentifierException
   * @Throws SOAPException
   * 
   */  
  @Throws(InvalidFieldsException, "Invalid values passed in")
  @Throws(BadIdentifierException, "Identifier passed in is not found/incorrect")
  @Throws(SOAPException, "SOAP Exceptions includes Expected And Unexpected Exceptions")
  public function exampleWsiServiceArrayInput(pInput : InputParameter[]) 
                    : OutputParameter {
    
    var result : OutputParameter = wsiExecute(
                                               \ requestInput : InputParameter[] -> { 
                                                 return  processExampleWsiServiceArrayInput(requestInput)
                                               }, 
                                               pInput
                                             )
    return result
  }

  /**
   * Example of an Inbound WS-I Web Service that takes in a single instance
   * of an XSD based class InputParameter (Defined in XSDExample.xsd) and returns 
   * multiple instances of the XSD based class OutputParameter. This method in 
   * turn calls the base class wsiExecuteAndReturnArray method and passes in a 
   * block that invokes the private method processExampleWsiServiceArrayOutput
   *  
   * @param pInput - InputParameter - XSD based class Instance that
   * contains mock values.
   * 
   * @return OutputParameter XSD based class instances - Returns back an 
   * array of mock instances of OutputParameter
   * 
   * @Throws InvalidFieldsException
   * @Throws BadIdentifierException
   * @Throws SOAPException
   * 
   */  
  @Throws(InvalidFieldsException, "Invalid values passed in")
  @Throws(BadIdentifierException, "Identifier passed in is not found/incorrect")
  @Throws(SOAPException, "SOAP Exceptions includes Expected And Unexpected Exceptions")
  public function exampleWsiServiceArrayOutput(pInput : InputParameter) 
                    : OutputParameter[] {
    
    var result : OutputParameter[] = wsiExecuteAndReturnArray(
                                                               \ requestInput : InputParameter -> { 
                                                                 return  processExampleWsiServiceArrayOutput(requestInput)
                                                               }, 
                                                               pInput
                                                             )
    return result
  }

  /**
   * Example of an Inbound WS-I Web Service that takes in multiple instances
   * of an XSD based class InputParameter (Defined in XSDExample.xsd) and returns 
   * multiple instances of the XSD based class OutputParameter. This method in 
   * turn calls the base class wsiExecuteAndReturnArray method and passes in a 
   * block that invokes the private method
   * processExampleWsiServiceArrayInputArrayOutput
   *  
   * @param pInput - InputParameter[] - Array of XSD based class 
   * Instances that contains mock values.
   * 
   * @return OutputParameter XSD based class instances - Returns back an 
   * array of mock instances of OutputParameter
   * 
   * @Throws InvalidFieldsException
   * @Throws BadIdentifierException
   * @Throws SOAPException
   * 
   */  
  @Throws(InvalidFieldsException, "Invalid values passed in")
  @Throws(BadIdentifierException, "Identifier passed in is not found/incorrect")
  @Throws(SOAPException, "SOAP Exceptions includes Expected And Unexpected Exceptions")
  public function exampleWsiServiceArrayInputArrayOutput(pInput : InputParameter[]) 
                    : OutputParameter[] {
    
    var result : OutputParameter[] = wsiExecuteAndReturnArray(
                                                               \ requestInput : InputParameter[] -> { 
                                                                 return  processExampleWsiServiceArrayInputArrayOutput(requestInput)
                                                               }, 
                                                               pInput
                                                             )
    return result
  }

  /**
   * Mock Service Implementation - In a real world sample this method will implement 
   * the required business functionality of the inbound service implementation
   *  
   * @param pInput - InputParameter - XSD based class Instance that
   * contains mock values.
   * 
   * @return OutputParameter XSD based class instance - Returns back a mock instance of
   * OutputParameter
   * 
   */  
  protected function processExampleWsiService(pInput : InputParameter) 
                        : OutputParameter {
    //verify and validate inputs 
    
    //In a real life scenario process and return response - In this mock example the response is populated
    //by  hard-coding the ExamplePOGOAPIOutParameter entity
    var output : OutputParameter = new OutputParameter() {
                                            :Output1 = "InputVal1 - ${pInput.Input1}",
                                            :Output2 = "InputVal2 - ${pInput.Input2}",
                                            :Output3 = "InputVal3 - ${pInput.Input3}"
                                          }
    return output
  }

  /**
   * Mock Service Implementation - In a real world sample this method will implement 
   * the required business functionality of the inbound service implementation
   *  
   * @param pInput - InputParameter[] - Array of XSD based class 
   * Instances that contains mock values.
   * 
   * @return OutputParameter XSD based class instance - Returns back a mock instance of
   * OutputParameter
   * 
   */  
  protected function processExampleWsiServiceArrayInput(pInput : InputParameter[]) 
                          : OutputParameter {
                            
    var output : OutputParameter = null
    
    //In a real life scenario process and return response - In this mock example the response is populated
    //by  hard-coding the ExamplePOGOAPIOutParameter entity
    if (pInput.Count > 0) {
      output = new OutputParameter() {
                                       :Output1 = "ArrayInputExample - Val1",
                                       :Output2 = "ArrayInputExample - Val2",
                                       :Output3 = "ArrayInputExample - Val3"
                                     }
    } // if (pInput.Count > 0)
    return output
  }
  
  /**
   * Mock Service Implementation - In a real world sample this method will implement 
   * the required business functionality of the inbound service implementation
   *  
   * @param pInput - InputParameter - XSD based class Instance that
   * contains mock values.
   * 
   * @return OutputParameter XSD based class instances - Returns back an 
   * array of mock instances of OutputParameter
   * 
   */  
  protected function processExampleWsiServiceArrayOutput(pInput : InputParameter) 
                          : OutputParameter[] {
                            
    var output : OutputParameter[] = null
    
    if (pInput != null) {
      //In a real life scenario process and return response - In this mock example the response is populated
      //by  hard-coding the ExamplePOGOAPIOutParameter entity
      output = new OutputParameter[] {
                  new OutputParameter() {
                        :Output1 = "ArrayOutputExample - Input1Value-1",
                        :Output2 = "ArrayOutputExample - Input1Value-2",
                        :Output3 = "ArrayOutputExample - Input1Value-3"
                        },
                  new OutputParameter() {
                        :Output1 = "ArrayOutputExample - Input2Value-1",
                        :Output2 = "ArrayOutputExample - Input2Value-2",
                        :Output3 = "ArrayOutputExample - Input2Value-3"
                        }
                }
    }
    return output
  }
  
  /**
   * Mock Service Implementation - In a real world sample this method will implement 
   * the required business functionality of the inbound service implementation
   *  
   * @param pInput - InputParameter[] - Array of XSD based class 
   * Instances that contains mock values.
   * 
   * @return OutputParameter XSD based class instances - Returns back an 
   * array of mock instances of OutputParameter
   * 
   */  
  protected function processExampleWsiServiceArrayInputArrayOutput(pInput : InputParameter[]) 
                          : OutputParameter[] {
                            
    var output : OutputParameter[] = null
    
    //In a real life scenario process and return response - In this mock example the response is populated
    //by  hard-coding the ExamplePOGOAPIOutParameter entity
    if (pInput.Count > 0) {
      output = new OutputParameter[] {
                  new OutputParameter() {
                        :Output1 = "ArrayInputArrayOutputExample - Input1Value-1",
                        :Output2 = "ArrayInputArrayOutputExample - Input1Value-2",
                        :Output3 = "ArrayInputArrayOutputExample - Input1Value-3"
                        },
                  new OutputParameter() {
                        :Output1 = "ArrayInputArrayOutputExample - Input2Value-1",
                        :Output2 = "ArrayInputArrayOutputExample - Input2Value-2",
                        :Output3 = "ArrayInputArrayOutputExample - Input2Value-3"
                        }
                }
    } // if (pInput.Count > 0)
    return output
  }

}
