//
//  WsiServiceExecutor.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//

package atsynthesize.suite.integration.service

uses gw.xml.IXmlMixedContent
uses gw.xml.ws.WsiInvocationContext
uses gw.util.ILogger


/**
 * Generic Wsi Service Executor Class Definition
 * <K> - Input Parameter Type
 * <V> - Output Parameter Type 
 */
class WsiServiceExecutor
        <K extends IXmlMixedContent, 
         V extends IXmlMixedContent> {
           
    /**
     * Type Defs for services handled by this service executor 
     */
    protected enum SERVICETYPEENUM { SERVICETYPE1, 
                                     SERVICETYPE2, 
                                     SERVICETYPE3, 
                                     SERVICETYPE4, 
                                     SERVICETYPE5, 
                                     SERVICETYPE6, 
                                     SERVICETYPE7, 
                                     SERVICETYPE8 }

    /**
     * Supported anonymous call back blocks by the wsi service executor 
     */
    private var _serviceType1 : block(input:K)   : V                               = null
    private var _serviceType2 : block(input:K[]) : V                               = null
    private var _serviceType3 : block(input:K)   : V[]                             = null
    private var _serviceType4 : block(input:K[]) : V[]                             = null
    private var _serviceType5 : block(input:K,   wsiic:WsiInvocationContext) : V   = null
    private var _serviceType6 : block(input:K[], wsiic:WsiInvocationContext) : V   = null
    private var _serviceType7 : block(input:K,   wsiic:WsiInvocationContext) : V[] = null
    private var _serviceType8 : block(input:K[], wsiic:WsiInvocationContext) : V[] = null
    
    /**
     * Logger used by the wsi service executor 
     */
    protected var _logger       : ILogger                                          = null

    /**
     * Web Service Invocation Context - this is used to support custom soap
     * header handling 
     */
    protected var _wsiIC        : WsiInvocationContext                             = null

    /**
     * The Service Type denoting this service executor 
     */
    protected var _serviceType  : SERVICETYPEENUM                                  = null

    /**
     * The Input Parameter Service Wrapper if any 
     */
    protected var _input        : WsiServiceParameterWrapper<K> as Input           = null

    /**
     * The Output Parameter Service Wrapper if any 
     */
    protected var _output       : WsiServiceParameterWrapper<V> as Output          = null

    /**
     * boolean indicator to denote if arrays are being handled as return params 
     */
    protected var _isArray      : boolean                                          = false
    
  /**
   * Protected Constructor - Initializes the input service parameter, service type,
   * wsi invocation context and the logger
   * 
   * @param pInput       - Input Parameter of Type K
   * @param pIsArray     - Is the Return an array type
   * @param pWsiIC       - Wsi Invocation Context
   * @param pServiceType - The Service type decides the anonymous block signature to be used
   * @param pLogger      - Logger 
   */  
    protected construct (pInput       : K,
                         pIsArray     : boolean,
                         pWsiIC       : WsiInvocationContext,
                         pServiceType : SERVICETYPEENUM,
                         pLogger      : ILogger) {
      _input       = new WsiServiceParameterWrapper<K>(pInput)
      _isArray     = pIsArray
      _wsiIC       = pWsiIC
      _serviceType = pServiceType
      _logger      = pLogger   
    }
    
  /**
   * Protected Constructor - Initializes the input service parameter, service type,
   * wsi invocation context and the logger. Overloaded to handle multiple instances of the
   * input type
   * 
   * @param pInput       - Input Parameter of Type K[]
   * @param pIsArray     - Is the Return an array type
   * @param pWsiIC       - Wsi Invocation Context
   * @param pServiceType - The Service type decides the anonymous block signature to be used
   * @param pLogger      - Logger 
   */  
    protected construct (pInput       : K[],
                         pIsArray     : boolean,
                         pWsiIC       : WsiInvocationContext,
                         pServiceType : SERVICETYPEENUM,
                         pLogger      : ILogger) {
      _input       = new WsiServiceParameterWrapper<K>(pInput)
      _isArray     = pIsArray
      _wsiIC       = pWsiIC
      _serviceType = pServiceType
      _logger      = pLogger   
    }

    construct(pService : block(input:K):V, 
              pInput   : K,
              pLogger  : ILogger) {
      this(pInput, 
           false, 
           null, 
           SERVICETYPEENUM.SERVICETYPE1,
           pLogger)         
      _serviceType1  = pService
    }

    construct(pService : block(input:K[]):V, 
              pInput   : K[],
              pLogger  : ILogger) {
      this(pInput, 
           false, 
           null, 
           SERVICETYPEENUM.SERVICETYPE2,       
           pLogger)         
      _serviceType2  = pService
      
    }

    construct(pService : block(input:K):V[], 
              pInput   : K, 
              pIsArray : boolean,
              pLogger  : ILogger) {
      this(pInput, 
           pIsArray, 
           null, 
           SERVICETYPEENUM.SERVICETYPE3,       
           pLogger)         
      _serviceType3  = pService
    }

    construct(pService : block(input:K[]):V[], 
              pInput   : K[], 
              pIsArray : boolean,
              pLogger  : ILogger) {
      this(pInput, 
           pIsArray, 
           null, 
           SERVICETYPEENUM.SERVICETYPE4,       
           pLogger)         
      _serviceType4  = pService
    }
    
    construct(pService : block(input:K,pWsiIC:WsiInvocationContext):V, 
              pInput   : K, 
              pWsiIC   : WsiInvocationContext,
              pLogger  : ILogger) {
      this(pInput, 
           false, 
           pWsiIC, 
           SERVICETYPEENUM.SERVICETYPE5,       
           pLogger)         
      _serviceType5  = pService
    }

    construct(pService : block(input:K[],pWsiIC:WsiInvocationContext):V, 
              pInput   : K[], 
              pWsiIC   : WsiInvocationContext,
              pLogger  : ILogger) {
      this(pInput, 
           false, 
           pWsiIC, 
           SERVICETYPEENUM.SERVICETYPE6,     
           pLogger)         
      _serviceType6  = pService
    }

    construct(pService : block(input:K,pWsiIC:WsiInvocationContext):V[], 
              pInput   : K, 
              pWsiIC   : WsiInvocationContext, 
              pIsArray : boolean,
              pLogger  : ILogger) {
      this(pInput, 
           pIsArray, 
           pWsiIC, 
           SERVICETYPEENUM.SERVICETYPE7,       
           pLogger)         
      _serviceType7  = pService
    }

    construct(pService : block(input:K[],pWsiIC:WsiInvocationContext):V[], 
              pInput   : K[], 
              pWsiIC   : WsiInvocationContext, 
              pIsArray : boolean,
              pLogger  : ILogger) {
      this(pInput, 
           pIsArray, 
           pWsiIC, 
           SERVICETYPEENUM.SERVICETYPE8,       
           pLogger)         
      _serviceType8  = pService
    }

  /**
   * Invokes the service implementation based on the service type implementation,
   * this results in a response back to the calling service client being
   * generated or an exception being thrown during the processing of the service
   * request.
   * 
   */  
    public function execute() {
      
      switch(_serviceType){
        case SERVICETYPEENUM.SERVICETYPE1 :
             _output = new WsiServiceParameterWrapper<V>(
                               _serviceType1(_input.Parameter)
                           )
             break; 
        case SERVICETYPEENUM.SERVICETYPE2 :
             _output = new WsiServiceParameterWrapper<V>(
                               _serviceType2(_input.ArrayParameter)
                           )
             break; 
        case SERVICETYPEENUM.SERVICETYPE3 :
             _output = new WsiServiceParameterWrapper<V>(
                               _serviceType3(_input.Parameter)
                           )
             break; 
        case SERVICETYPEENUM.SERVICETYPE4 :
             _output = new WsiServiceParameterWrapper<V>(
                               _serviceType4(_input.ArrayParameter)
                           )
             break; 
        case SERVICETYPEENUM.SERVICETYPE5 :
             _output = new WsiServiceParameterWrapper<V>(
                               _serviceType5(_input.Parameter, 
                                             _wsiIC)
                           )
             break; 
        case SERVICETYPEENUM.SERVICETYPE6 :
             _output = new WsiServiceParameterWrapper<V>(
                               _serviceType6(_input.ArrayParameter, 
                                             _wsiIC)
                            )
             break; 
        case SERVICETYPEENUM.SERVICETYPE7 :
             _output = new WsiServiceParameterWrapper<V>(
                               _serviceType7(_input.Parameter, 
                                             _wsiIC)
                           )
             break; 
        case SERVICETYPEENUM.SERVICETYPE8 :
             _output = new WsiServiceParameterWrapper<V>(
                              _serviceType8(_input.ArrayParameter, 
                                            _wsiIC)
                           )
             break; 
      } // switch(_serviceType)
      
    }
    
  /**
   * Property returns displayable name of the service executor
   * 
   */
    protected property get Name() : String {
      return "ServiceExecutorWsi[${_serviceType.DisplayName}]"
    }
}
