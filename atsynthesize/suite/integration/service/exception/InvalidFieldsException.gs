//
//  InvalidFieldsException.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//

package atsynthesize.suite.integration.service.exception

uses java.util.ArrayList

uses gw.api.webservice.exception.SOAPException

class InvalidFieldsException 
        extends SOAPException {

  /**
   * Name of entity that contains invalid fields
   */
  private var _entityName    : String       = null

  /**
   * List of invalid fields in the entity
   */
  private var _invalidFields : List<String> = new ArrayList<String>()

  construct(pEntityName : String) { 
    super("Null/Invalid Values in ${pEntityName}")
    _entityName = pEntityName
  }

  override public property get Message() : String {
    var theMessage = super.Message;
    if (_invalidFields.Count > 0) {
      var allInvalidFields : String = _invalidFields.join(",")
      theMessage = "Invalid values found in '${_entityName}' - ${allInvalidFields}"
    }
    return theMessage
  }
  
  public function addInvalidField(pName : String, pValue : String) {
    _invalidFields.add("[${pName}:'${pValue}']")
  }

  public function addInvalidField(pName : String, pValue : String, pMessage : String) {
    _invalidFields.add("[${pName}:'${pValue}' - ${pMessage}]")
  }

  public property get HasInvalidFields() : boolean {
    return _invalidFields.Count > 0
  }
}
