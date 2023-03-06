## strftime

#### Adds strftime function to javascript Date object which has been long due.

#### Usage:

    var d = new Date();
    console.log(d.strftime("%a %d %B %Y %I:%M:%S %p"));

#### Supported format identifiers

Code|Example|Description
---|---|---
%A |Sunday |Weekday fullname.
%a |Sun|Weekday abbreviated name.
%d |8|Day of the month.
%b|Sep|Month abbreviated name.
%B|September|Month full name.
%Y|2022|Year with century as a decimal number.
%y|22|Year without century as a decimal number.
%H|16|Hour (24-hour clock)
%I|4|Hour (12-hour clock)
%M|6|Minute as a decimal number.
%S|16|Second as a decimal number.
%p|AM|AM or PM
