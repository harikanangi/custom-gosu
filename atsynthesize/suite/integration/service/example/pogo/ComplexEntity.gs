//
//  ComplexEntity.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//
package atsynthesize.suite.integration.service.example.pogo


uses gw.xml.ws.annotation.WsiExportable

uses atsynthesize.suite.integration.service.IWsiServiceEntity

@WsiExportable("http://atsynthesize.com/gw/ws/atsynthesize/suite/integration/service/example/pogo/ComplexEntity")
final class ComplexEntity 
              implements IWsiServiceEntity {
  private var _entityParam1 : String as EntityParam1
  
  
  //Provide a short descriptions to identify object (Id/Key/PublicId etc)
  override public property get ShortDescription() : String {
    return "[${this.toString()}]"
  }
    
  //Provide a long descriptions that completely describes the object
  override public property get LongDescription () : String {
    return "[${this.toString()}-->{[EntityParam1:${_entityParam1}]}]"
  }

}