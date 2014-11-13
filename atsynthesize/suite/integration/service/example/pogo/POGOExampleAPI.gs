//
//  POGOExampleAPI.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//
package atsynthesize.suite.integration.service.example.pogo

uses gw.api.server.AvailabilityLevel
uses gw.api.webservice.exception.BadIdentifierException
uses gw.api.webservice.exception.SOAPException
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiWebService

uses atsynthesize.suite.integration.service.WsiServiceBaseAPI
uses atsynthesize.suite.integration.service.exception.InvalidFieldsException

@WsiWebService( "http://atsynthesize.com/gw/ws/atsynthesize/integration/service/example/pogo/POGOExampleAPI" )
@WsiAvailability(AvailabilityLevel.MULTIUSER)
class POGOExampleAPI 
        extends WsiServiceBaseAPI {
  
  /**
   * Constructor - Invokes the super's constructor with POGOExampleAPI
   * as the name of the inbound integration. The log file for this will be
   * determined by the configuration of Integration.POGOExampleAPI or
   * Integration categories in logging.properties
   */  
  construct() {
    super("POGOExampleAPI")
  }
  
  /**
   * Example of an Inbound WS-I Web Service that takes in a single instance
   * of a GOSU class InputParameter and returns an instance of the GOSU class
   * OutputParameter. This method in turn calls the base class wsiExecute method
   * and passes in a block that invokes the private method 
   * processExampleWsiService
   *  
   * @param pInput - InputParameter - GOSU class Instance that
   * contains mock values.
   * 
   * @return OutputParameter GOSU class instance - Returns back a mock instance of
   * Output Parameter
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
   * of a GOSU class InputParameter and returns an instance of the GOSU class
   * OutputParameter. This method in turn calls the base class wsiExecute method
   * and passes in a block that invokes the private method 
   * processExampleWsiServiceArrayInput
   *  
   * @param pInput - InputParameter[] - Array of GOSU class 
   * Instances that contains mock values.
   * 
   * @return OutputParameter GOSU class instance - Returns back a mock instance of
   * Output Parameter
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
   * of a GOSU class InputParameter and returns an array of instances of the 
   * GOSU class OutputParameter. This method in turn calls the base class 
   * wsiExecuteAndReturnArray method and passes in a block that invokes the 
   * private method processExampleWsiServiceArrayOutput
   *  
   * @param pInput -  InputParameter - GOSU class Instance that
   * contains mock values.
   * 
   * @return OutputParameter GOSU class instances - Returns back an array of mock 
   * instances of OutputParameter
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
   * of a GOSU class InputParameter and returns an array of instances of the 
   * GOSU class OutputParameter. This method in turn calls the base class 
   * wsiExecuteAndReturnArray method and passes in a block that invokes the 
   * private method processExampleWsiServiceArrayInputArrayOutput
   *  
   * @param pInput - InputParameter[] - Array of GOSU class 
   * Instances that contains mock values.
   * 
   * @return OutputParameter GOSU class instances - Returns back an array of mock 
   * instances of OutputParameter
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
   * Invoked within the block of the service implementation to perform business
   * logic - In this example, mocks up the response OutputParameter instance
   *  
   * @param pInput -  InputParameter - GOSU class Instance that
   * contains mock values.
   * 
   * @return OutputParameter GOSU class instance - Returns back a mock instance of
   * Output Parameter
   * 
   * 
   */  
  protected function processExampleWsiService(pInput : InputParameter) 
                        : OutputParameter {
    //verify and validate inputs 
    
    //In a real life scenario process and return response - In this mock example the response is populated
    //by  hard-coding the ExamplePOGOAPIOutParameter entity
    var output : OutputParameter = new OutputParameter() {
                                            :Output1 = "OutputVal1 - ${pInput.Input1}",
                                            :Output2 = 1,
                                            :Output3 = new String[] {"Output3Value1", "Output3Value2"},
                                            :Output4 = new ComplexEntity() {
                                                        :EntityParam1 = "EntityParamValue"
                                                       },
                                            :Output5 = new ComplexEntity[] { 
                                                                             new ComplexEntity() {
                                                                               :EntityParam1 = "EntityParam1Value"
                                                                             },
                                                                             new ComplexEntity() {
                                                                               :EntityParam1 = "EntityParam2Value"
                                                                             }
                                                                           }
                                          }
    return output
  }

  /**
   * Invoked within the block of the service implementation to perform business
   * logic - In this example, mocks up the response OutputParameter instance
   *  
   * @param pInput - InputParameter[] - Array of GOSU class 
   * Instances that contains mock values.
   * 
   * @return OutputParameter GOSU class instance - Returns back a mock instance of
   * Output Parameter
   * 
   * 
   */  
  protected function processExampleWsiServiceArrayInput(pInput : InputParameter[]) 
                          : OutputParameter {
                            
    var output : OutputParameter = null
    
    //In a real life scenario process and return response - In this mock example the response is populated
    //by  hard-coding the ExamplePOGOAPIOutParameter entity
    if (pInput.Count > 0) {
      output = new OutputParameter() {
                    :Output1 = "ArrayInputExample - Output1Value",
                    :Output2 = 1,
                    :Output3 = new String[] {"ArrayInputExample - Output3Value1", "ArrayInputExample - Output3Value2"},
                    :Output4 = new ComplexEntity() {
                                :EntityParam1 = "ArrayInputExample - EntityParamValue"
                               },
                    :Output5 = new ComplexEntity[] { 
                                 new ComplexEntity() {
                                   :EntityParam1 = "ArrayInputExample - EntityParam1Value"
                                 },
                                 new ComplexEntity() {
                                   :EntityParam1 = "ArrayInputExample - EntityParam2Value"
                                 }
                               }
                    }
    } // if (pInput.Count > 0)
    return output
  }
  
  /**
   * Invoked within the block of the service implementation to perform business
   * logic - In this example, mocks up the response array of OutputParameter 
   * instances
   *  
   * @param pInput -  InputParameter - GOSU class Instance that
   * contains mock values.
   * 
   * @return OutputParameter GOSU class instance - Returns back a mock instance of
   * Output Parameter
   * 
   */  
  protected function processExampleWsiServiceArrayOutput(pInput : InputParameter) 
                          : OutputParameter[] {
                            
    var output : OutputParameter[] = null
    
    //In a real life scenario process and return response - In this mock example the response is populated
    //by  hard-coding the ExamplePOGOAPIOutParameter entity
    output = new OutputParameter[] {
                new OutputParameter() {
                      :Output1 = "ArrayOutputExample - Output1Value-1 - ${pInput.Input1}",
                      :Output2 = 1,
                      :Output3 = new String[] {"ArrayOutputExample - Output3Value1-1", "ArrayOutputExample - Output3Value2-1"},
                      :Output4 = new ComplexEntity() {
                                  :EntityParam1 = "ArrayOutputExample - EntityParamValue"
                                 },
                      :Output5 = new ComplexEntity[] { 
                                   new ComplexEntity() {
                                     :EntityParam1 = "ArrayOutputExample - EntityParam1Value-1"
                                   },
                                   new ComplexEntity() {
                                     :EntityParam1 = "ArrayOutputExample - EntityParam2Value-1"
                                   }
                                 }
                      },
                new OutputParameter() {
                      :Output1 = "ArrayOutputExample - Output1Value-2",
                      :Output2 = 1,
                      :Output3 = new String[] {"ArrayOutputExample - Output3Value1-2", "ListExample - Output3Value2-2"},
                      :Output4 = new ComplexEntity() {
                                  :EntityParam1 = "ArrayOutputExample - EntityParamValue-2"
                                 },
                      :Output5 = new ComplexEntity[] { 
                                   new ComplexEntity() {
                                     :EntityParam1 = "ArrayOutputExample - EntityParam1Value-2"
                                   },
                                   new ComplexEntity() {
                                     :EntityParam1 = "ArrayOutputExample - EntityParam2Value-2"
                                   }
                                 }
                      }
              }
    return output
  }
  
  /**
   * Invoked within the block of the service implementation to perform business
   * logic - In this example, mocks up the response array of OutputParameter 
   * instances
   *  
   * @param pInput - InputParameter[] - Array of GOSU class 
   * Instances that contains mock values.
   * 
   * @return OutputParameter GOSU class instance - Returns back a mock instance of
   * Output Parameter
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
                        :Output1 = "ArrayInputArrayOutputExample - Output1Value-1",
                        :Output2 = 1,
                        :Output3 = new String[] {"ArrayInputArrayOutputExample - Output3Value1-1", "ArrayInputArrayOutputExample - Output3Value2-1"},
                        :Output4 = new ComplexEntity() {
                                    :EntityParam1 = "ArrayInputArrayOutputExample - EntityParamValue"
                                   },
                        :Output5 = new ComplexEntity[] { 
                                     new ComplexEntity() {
                                       :EntityParam1 = "ArrayInputArrayOutputExample - EntityParam1Value-1"
                                     },
                                     new ComplexEntity() {
                                       :EntityParam1 = "ArrayInputArrayOutputExample - EntityParam2Value-1"
                                     }
                                   }
                        },
                  new OutputParameter() {
                        :Output1 = "ArrayInputArrayOutputExample - Output1Value-2",
                        :Output2 = 1,
                        :Output3 = new String[] {"ArrayInputArrayOutputExample - Output3Value1-2", "ArrayInputArrayOutputExample - Output3Value2-2"},
                        :Output4 = new ComplexEntity() {
                                    :EntityParam1 = "ArrayInputArrayOutputExample - EntityParamValue-2"
                                  },
                        :Output5 = new ComplexEntity[] { 
                                     new ComplexEntity() {
                                       :EntityParam1 = "ArrayInputArrayOutputExample - EntityParam1Value-2"
                                     },
                                     new ComplexEntity() {
                                       :EntityParam1 = "ArrayInputArrayOutputExample - EntityParam2Value-2"
                                     }
                                   }
                        }
                }
    } // if (pInput.Count > 0)
    return output
  }

}
