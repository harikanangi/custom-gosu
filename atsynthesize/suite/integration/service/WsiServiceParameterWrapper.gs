//
//  WsiServiceParameterWrapper.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//

package atsynthesize.suite.integration.service

uses gw.xml.IXmlMixedContent
uses gw.xml.XmlElement

/**
 * Generic Wsi Service Parameter Wrapper Class Definition
 * Used for Both Input And Output Service Parameters
 * <K> - Parameter Type
 */
class WsiServiceParameterWrapper
        <K extends IXmlMixedContent>
          implements IWsiServiceEntity {
            
    /**
     * Parameter of Type K 
     */
    private var _parameter    : K       as Parameter       = null
    
    /**
     * Array Parameter of Type K
     */
    private var _arrParameter : K[]     as ArrayParameter  = null
    
    /**
     * Is the parameter of type K or K[]
     */
    private var _isList       : boolean as IsListParameter = false
  
    /**
     * Constructor - Initializes Parameter
     * 
     * @param pParameter   - Parameter of Type K 
     */  
    construct(pParameter : K) {
      _parameter = pParameter
    }
  
    /**
     * Constructor - Initializes Array Parameter
     * 
     * @param pParameter   - Parameter of Type K[]
     */  
    construct(pParameter : K[]) {
      _arrParameter = pParameter
      _isList = true
    }
  
    /**
     * Override Property (Get) - Describe Parameter - Short
     * 
     */  
    override public property get ShortDescription() : String {
      return getDescription(false)
    }
  
    /**
     * Override Property (Get) - Describe Parameter - Long
     * 
     */  
    override public property get LongDescription () : String {
      return getDescription(true)
    }
  
    /**
     * Verify if the parameter specified is null
     * 
     */  
    public function isParameterNull() : boolean {
      return (_isList ? _arrParameter == null : _parameter == null)
    }
  
    /**
     * Describe Parameter, Handle both arrays and single instances of K
     * 
     */  
    private function getDescription(pUseLongDescription : boolean) 
                          : String {
      var description : String = "";
    
      if (_isList) {
        if (_arrParameter != null && _arrParameter.Count > 0) {
          for (aParameter in _arrParameter) {
            var inputDescription : String = getDescription(aParameter,pUseLongDescription)
            description = "${description}${inputDescription}"                                         
          } // for (pInput in pInputs)
        } // if (pInputs != null && pInputs.Count > 0)
      } else {
        description = getDescription(_parameter, pUseLongDescription)
      } // if (_isList)
    
      return description
    }
  
    /**
     * Describe Parameter, Handle POGO, GX Model and XSD Instances
     * 
     */  
    private function getDescription(pParameter          : K, 
                                    pUseLongDescription : boolean) 
                           : String {
      var description : String = null
    
      if (pParameter != null) {
        if (pParameter typeis IWsiServiceEntity) {
          description = (pUseLongDescription ? "[${pParameter.LongDescription}]" : "[${pParameter.ShortDescription}]")
        } else if (pParameter typeis XmlElement) {
          description = (pUseLongDescription ? "[${(pParameter as XmlElement).asUTFString()}]" : "[${pParameter.toString()}]")
        } else {
          description = "[${pParameter.toString()}]"
        }
      } // if (pParameter != null
    
      return description
    }
}
