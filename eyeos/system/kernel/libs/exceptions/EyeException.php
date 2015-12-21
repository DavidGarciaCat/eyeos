<?php
/*
*                 eyeos - The Open Source Cloud's Web Desktop
*                               Version 2.0
*                   Copyright (C) 2007 - 2010 eyeos Team 
* 
* This program is free software; you can redistribute it and/or modify it under
* the terms of the GNU Affero General Public License version 3 as published by the
* Free Software Foundation.
* 
* This program is distributed in the hope that it will be useful, but WITHOUT
* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
* FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
* details.
* 
* You should have received a copy of the GNU Affero General Public License
* version 3 along with this program in the file "LICENSE".  If not, see 
* <http://www.gnu.org/licenses/agpl-3.0.txt>.
* 
* See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
* 
* The interactive user interfaces in modified source and object code versions
* of this program must display Appropriate Legal Notices, as required under
* Section 5 of the GNU Affero General Public License version 3.
* 
* In accordance with Section 7(b) of the GNU Affero General Public License version 3,
* these Appropriate Legal Notices must retain the display of the "Powered by
* eyeos" logo and retain the original copyright notice. If the display of the 
* logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
* must display the words "Powered by eyeos" and retain the original copyright notice. 
*/

/**
 * This class is designed to be the Exception class replacement for PHP >= 5.3.0
 * 
 * @package kernel-libs
 * @subpackage exceptions
 */
class EyeException extends Exception implements IChainableException {

	public function getChainedTrace() {
		return ExceptionStackUtil::getChainedTrace($this);
	}

	/**
	 * Returns the stack trace in a IChainableException array form.
	 * @return array(IChainableException)
	 */
	public final function getStackTrace() {
		$stackTrace = array($this);
		$e = $this->getPrevious();
		while ($e !== null) {
			$stackTrace[] = $e;
			if (method_exists($e, 'getPrevious')) {
				$e = $e->getPrevious();
			} else {
				$e = null;
			}
		}
		return $stackTrace;
	}
	
	public function printStackTrace($htmlFormat = false) {
		ExceptionStackUtil::printStackTrace($this, $htmlFormat);
	}
	
	public function __toString() {
		return ExceptionStackUtil::getStackTrace($this, false);
	}
}
?>
