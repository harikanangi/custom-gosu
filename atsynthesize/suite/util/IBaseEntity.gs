//
//  IBaseEntity.gs
//
//  Created by Hari Kanangi on 01/25/2013.
//  Copyright (c) 2013 Hari Kanangi. 
//  License: http://www.harikanangi.com/license.txt
//

package atsynthesize.suite.util

interface IBaseEntity {
  /**
   * Property (Get) - Describe Entity - Short
   * 
   */  
  public property get ShortDescription() : String

  /**
   * Property (Get) - Describe Entity - Long
   * 
   */  
  public property get LongDescription () : String
}
