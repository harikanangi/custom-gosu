//
//  InputParameter.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//

package atsynthesize.suite.integration.service.example.pogo

uses gw.xml.ws.annotation.WsiExportable

uses atsynthesize.suite.integration.service.IWsiServiceEntity

@WsiExportable("http://atsynthesize.com/gw/ws/atsynthesize/suite/integration/service/example/pogo/InputParameter")
final class InputParameter 
              implements IWsiServiceEntity {
  private var _input1 : String        as Input1
  private var _input2 : ComplexEntity as Input2

  //Provide a short descriptions to identify object (Id/Key/PublicId etc)
  override public property get ShortDescription() : String {
    return "[${this.toString()}-->{[Input1:${_input1}]}]"
  }
    
  //Provide a long descriptions that completely describes the object
  override public property get LongDescription () : String {
    return "[${this.toString()}-->{[Input1:${_input1}][Input2:${_input2.LongDescription}]}]"
  }
}

