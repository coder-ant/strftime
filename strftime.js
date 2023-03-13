/*
This work is distributed under the MIT Licence.

Written by coder-ant 2022-2023.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

SHORT_WEEK_NAMES_ = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
LONG_WEEK_NAMES_ = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
SHORT_MONTH_NAMES_ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
LONG_MONTH_NAMES_ = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//
// %b - Month abbreviated name
// %B - Month full name
//
Date.prototype.getMonthName = function(fmt) {
    var names;
    if ( fmt == "%B" ) {
        names = LONG_MONTH_NAMES_;
    } else {
        names = SHORT_MONTH_NAMES_;
    }
    return names[this.getMonth()];
}

//
// %b - Week abbreviated name
// %B - Week full name
//
Date.prototype.getWeekName = function(fmt) {
    var names;
    if ( fmt == "%A" ) {
        names = LONG_WEEK_NAMES_;
    } else {
        names = SHORT_WEEK_NAMES_;
    }
    return names[this.getDay()];
}

//
// %y - Year without century 
// %Y - Year with century 
//
Date.prototype.getYear = function(fmt) {
    var out = null;
    if ( fmt == "%Y" ) {
        out = this.getFullYear();
    } else {
        out = String(this.getFullYear()).substr(2, 2);
    }
    return out;
}

Date.prototype.getHours12 = function() {
    return (this.getHours() + 24) % 12 || 12;
}

Date.prototype.getAmPm = function() {
    var hh = this.getHours();
    var out;
    if ( hh < 12 ) {
        out = "AM";
    } else {
        out = "PM";
    }
    return out;
}

Date.prototype.fn1 = {
                        "%A": Date.prototype.getWeekName, 
                        "%a": Date.prototype.getWeekName, 
                        "%d": Date.prototype.getDate, 
                        "%b": Date.prototype.getMonthName,
                        "%B": Date.prototype.getMonthName,
                        "%Y": Date.prototype.getYear,
                        "%y": Date.prototype.getYear,
                        "%H": Date.prototype.getHours,
                        "%I": Date.prototype.getHours12,
                        "%M": Date.prototype.getMinutes,
                        "%S": Date.prototype.getSeconds,
                        "%p": Date.prototype.getAmPm
                     };

Date.prototype.strftime = function(fmt) {
    var out_str = fmt;
    var fields = fmt.match(/%-?[^%]/g);
    var padZero = true;
    var v;
    for(var i = 0;i < fields.length;i ++) {
        var f = fields[i];
        padZero = true;
        if (f.length == 3 && f[1] == "-") {
            f = fields[i].replace("-", "");
            padZero = false;
        }
        if ( this.fn1[f] == undefined ) {
            throw "Invalid format string";
        }
        v = this.fn1[f].call(this, f);
        if ( typeof(v) == "number" && padZero && v < 10 ) {
            v = "0" + v;
        }
        out_str = out_str.replace(fields[i], v);
    }
    return out_str;
}
