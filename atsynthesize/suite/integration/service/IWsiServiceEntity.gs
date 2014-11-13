//
//  IWsiServiceEntity.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//

package atsynthesize.suite.integration.service

uses gw.xml.IXmlMixedContent

uses atsynthesize.suite.util.IBaseEntity

/**
 * Marker interface for all POGO based WS-I service parameters
 */
interface IWsiServiceEntity 
            extends IXmlMixedContent, IBaseEntity {

}
