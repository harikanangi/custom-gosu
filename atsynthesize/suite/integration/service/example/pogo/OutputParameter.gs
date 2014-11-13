//
//  OutputParameter.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//
package atsynthesize.suite.integration.service.example.pogo

uses gw.xml.ws.annotation.WsiExportable

uses atsynthesize.suite.integration.service.IWsiServiceEntity

@WsiExportable("http://atsynthesize.com/gw/ws/atsynthesize/suite/integration/service/example/pogo/OutputParameter")
final class OutputParameter 
              implements IWsiServiceEntity {
  private var _output1 : String           as Output1
  private var _output2 : int              as Output2
  private var _output3 : String[]         as Output3
  private var _output4 : ComplexEntity    as Output4
  private var _output5 : ComplexEntity[]  as Output5

  //Provide a short descriptions to identify object (Id/Key/PublicId etc)
  override public property get ShortDescription() : String {
    return "[${this.toString()}-->{[Output1:${_output1}][Input2:${_output2}]}]"
  }
    
  //Provide a long descriptions that completely describes the object
  override public property get LongDescription () : String {
    var output5Description = ""
    _output5?.each(\ e -> {output5Description = "${output5Description}${e.LongDescription}"})
    return "[${this.toString()}-->{[Output1:${_output1}][Output2:${_output2}][Output3:${_output3?.join(",")}][Output4:${_output4.LongDescription}][Output5:${output5Description}]}]"
  }
}
